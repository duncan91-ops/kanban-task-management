from django.urls import path

from .views import (
    TaskListCreateAPIView,
    TaskUpdateAPIView,
    SubtaskUpdateAPIView,
    delete_task_api_view,
    delete_subtask_api_view,
)

urlpatterns = [
    path("<str:board_id>/", TaskListCreateAPIView.as_view(), name="task_list"),
    path("<str:board_id>/", TaskListCreateAPIView.as_view(), name="task_create"),
    path("<str:task_id>/update/", TaskUpdateAPIView.as_view(), name="task_update"),
    path(
        "subtasks/<str:subtask_id>/update/",
        SubtaskUpdateAPIView.as_view(),
        name="subtask_update",
    ),
    path("<str:task_id>/delete/", delete_task_api_view, name="task_delete"),
    path(
        "subtasks/<str:subtask_id>/delete/",
        delete_subtask_api_view,
        name="subtask_delete",
    ),
]
