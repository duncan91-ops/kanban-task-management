from rest_framework import permissions, status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.views import APIView

from .exceptions import BoardNotFound, NotYourBoard
from .models import Board
from .serializers import BoardSerializer, BoardCreateSerializer


class BoardListCreateAPIView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request):
        data = request.data
        serializer = BoardCreateSerializer(data=data, context={"request": request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response({"error": "Invalid data"}, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request):
        user = request.user
        boards = Board.objects.filter(user=user)
        serializer = BoardSerializer(boards, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class BoardUpdateAPIView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def patch(self, request, board_id):
        try:
            board = Board.objects.get(id=board_id)
        except Board.DoesNotExist:
            raise BoardNotFound

        user_email = board.user.email
        if user_email != request.user.email:
            raise NotYourBoard

        data = request.data
        serializer = BoardSerializer(instance=board, data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response({"error": "Invalid data"}, status=status.HTTP_400_BAD_REQUEST)


@api_view(["DELETE"])
@permission_classes([permissions.IsAuthenticated])
def delete_board_api_view(request, board_id):
    try:
        board = Board.objects.get(id=board_id)
    except Board.DoesNotExist:
        raise BoardNotFound

    user_email = board.user.email
    if user_email != request.user.email:
        return Response(
            {"error": "You can't delete a board that does not belong to you"},
            status=status.HTTP_403_FORBIDDEN,
        )

    delete_operation = board.delete()
    if delete_operation:
        return Response(
            {"success": "Deletion was successful"}, status=status.HTTP_200_OK
        )
    return Response({"failure": "Deletion failed"})
