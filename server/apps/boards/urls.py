from django.urls import path

from .views import (
    BoardCreateAPIView,
    BoardListAPIView,
    BoardUpdateAPIView,
    delete_board_api_view,
    delete_column_api_view,
)

urlpatterns = [
    path("", BoardListAPIView.as_view, name="board_list"),
    path("create/", BoardCreateAPIView.as_view(), name="board_create"),
    path("update/<str:board_id>/", BoardUpdateAPIView.as_view(), name="board_update"),
    path("delete/<str:board_id>/", delete_board_api_view, name="board_delete"),
    path(
        "columns/delete/<str:column_id>/", delete_column_api_view, name="column_delete"
    ),
]
