from rest_framework import serializers

from .models import Task, Subtask


class SubtaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subtask
        fields = ["id", "title", "completed"]


class TaskSerializer(serializers.ModelSerializer):
    subtasks = SubtaskSerializer(many=True)

    class Meta:
        model = Task
        fields = [
            "id",
            "title",
            "description",
            "status",
            "total_subtasks",
            "completed_subtasks",
            "subtasks",
        ]


class CreateSubtaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subtask
        fields = ["title"]


class CreateTaskSerializer(serializers.ModelSerializer):
    subtasks = CreateSubtaskSerializer(many=True)

    class Meta:
        model = Task
        fields = ["title", "description", "status", "subtasks"]

    def create(self, validated_data):
        board = self.context["board"]
        subtasks_data = validated_data.pop("subtasks")
        task = Task.objects.create(board=board, **validated_data)
        for subtask_data in subtasks_data:
            Subtask.objects.create(task=task, **subtask_data)
        return task


class UpdateTaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = ["id", "title", "description", "status"]


class UpdateSubtaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subtask
        fields = ["id", "title", "completed"]
