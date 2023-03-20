from rest_framework import permissions, status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.views import APIView

from .exceptions import TaskNotFound, NotYourTask, SubtaskNotFound, NotYourSubtask
from .models import Task, Subtask
from .serializers import (
    CreateTaskSerializer,
    TaskSerializer,
    UpdateSubtaskSerializer,
    UpdateTaskSerializer,
)
from apps.boards.models import Board


class TaskCreateAPIView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request, board_id):
        user_email = request.user.email
        data = request.data
        try:
            board = Board.objects.get(id=board_id)
        except Board.DoesNotExist:
            return Response(
                {"error": "The requested board does not exist"},
                status=status.HTTP_400_BAD_REQUEST,
            )

        if user_email != board.user.email:
            return Response(
                {"error": "The board you are trying to edit does not belong to you"},
                status=status.HTTP_403_FORBIDDEN,
            )

        serializer = CreateTaskSerializer(data=data, context={"board": board})
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)


class TaskListAPIView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request, board_id):
        user_email = request.user.email
        try:
            board = Board.objects.get(id=board_id)
        except Board.DoesNotExist:
            return Response(
                {"error": "The requested board does not exist"},
                status=status.HTTP_400_BAD_REQUEST,
            )

        if user_email != board.user.email:
            return Response(
                {"error": "The board you are trying to edit does not belong to you"},
                status=status.HTTP_403_FORBIDDEN,
            )

        tasks = Task.objects.filter(board=board)
        serializer = TaskSerializer(tasks, many=True, context={"request": request})
        return Response(serializer.data, status=status.HTTP_200_OK)


class TaskUpdateAPIView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def patch(self, request, task_id):
        try:
            task = Task.objects.get(id=task_id)
        except Task.DoesNotExist:
            raise TaskNotFound

        user_email = task.board.user.email
        if user_email != request.user.email:
            raise NotYourTask

        data = request.data
        subtasks_data = data.pop("subtasks")
        if subtasks_data:
            for subtask_data in subtasks_data:
                id = subtask_data.get("id", None)
                if id is None:
                    Subtask.objects.create(task=task, **subtask_data)
                else:
                    completed = subtask_data.get("completed", None)
                    subtask = Subtask.objects.get(id=id)
                    serializer = UpdateSubtaskSerializer(
                        instance=subtask, data=subtask_data, partial=True
                    )
                    serializer.is_valid()
                    serializer.save()
                    # Increase number of completed task if completed
                    if completed:
                        task.completed_subtasks += 1
                        task.save()

        serializer = UpdateTaskSerializer(instance=task, data=data, partial=True)
        serializer.is_valid()
        serializer.save()

        task = Task.objects.get(id=task_id)
        serializer = TaskSerializer(task, context={"request": request})
        return Response(serializer.data, status=status.HTTP_200_OK)


class SubtaskUpdateAPIView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def patch(self, request, subtask_id):
        try:
            subtask = Subtask.objects.get(id=subtask_id)
        except Subtask.DoesNotExist:
            raise SubtaskNotFound

        user_email = subtask.task.board.user.email
        if user_email != request.user.email:
            raise NotYourSubtask

        data = request.data
        completed = data.get("completed", None)
        serializer = UpdateSubtaskSerializer(instance=subtask, data=data, partial=True)
        serializer.is_valid()
        serializer.save()
        if completed:
            subtask.task.completed_subtasks += 1
            subtask.task.save()
        return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(["DELETE"])
@permission_classes([permissions.IsAuthenticated])
def delete_task_api_view(request, task_id):
    try:
        task = Task.objects.get(id=task_id)
    except Task.DoesNotExist:
        raise TaskNotFound

    user_email = task.board.user.email
    if user_email != request.user.email:
        return Response(
            {"error": "Cannot delete task that does not belong to you"},
            status=status.HTTP_403_FORBIDDEN,
        )

    deletion_operation = task.delete()
    if deletion_operation:
        return Response({"success": "Deletion successful"}, status=status.HTTP_200_OK)
    else:
        return Response({"failure": "Deletion failed"}, status=status.HTTP_200_OK)


@api_view(["DELETE"])
@permission_classes([permissions.IsAuthenticated])
def delete_subtask_api_view(request, subtask_id):
    try:
        subtask = Subtask.objects.get(id=subtask_id)
    except Subtask.DoesNotExist:
        raise SubtaskNotFound

    user_email = subtask.task.board.user.email
    if user_email != request.user.email:
        return Response(
            {"error": "Cannot delete task that does not belong to you"},
            status=status.HTTP_403_FORBIDDEN,
        )

    completed = subtask.completed
    task = subtask.task
    deletion_operation = subtask.delete()
    if deletion_operation:
        # reduce number of task & number of completed tasks if completed
        task.total_subtasks -= 1
        if completed:
            task.completed_subtasks -= 1
        task.save()
        return Response({"success": "Deletion successful"}, status=status.HTTP_200_OK)
    else:
        return Response({"failure": "Deletion failed"}, status=status.HTTP_200_OK)
