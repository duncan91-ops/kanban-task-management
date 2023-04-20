from django.urls import path

from .views import (
    BoardListCreateAPIView,
    # BoardListAPIView,
    BoardUpdateAPIView,
    delete_board_api_view,
)

urlpatterns = [
    path("", BoardListCreateAPIView.as_view(), name="board_list_create"),
    # path("", BoardListCreateAPIView.as_view(), name="board_create"),
    path("<str:board_id>/update/", BoardUpdateAPIView.as_view(), name="board_update"),
    path("<str:board_id>/delete/", delete_board_api_view, name="board_delete"),
]
