from django.urls import path

from .views import (
    TaskCreateAPIView,
    TaskListAPIView,
    TaskUpdateAPIView,
    SubtaskUpdateAPIView,
    delete_task_api_view,
    delete_subtask_api_view,
)

urlpatterns = [
    path("<str:board_id>/", TaskListAPIView.as_view(), name="task_list"),
    path("create/<str:board_id>/", TaskCreateAPIView.as_view(), name="task_create"),
    path("update/<str:task_id>/", TaskUpdateAPIView.as_view(), name="task_update"),
    path(
        "subtasks/update/<str:subtask_id>/",
        SubtaskUpdateAPIView.as_view(),
        name="subtask_update",
    ),
    path("delete/<str:task_id>/", delete_task_api_view, name="task_delete"),
    path(
        "subtasks/delete/<str:subtask_id>/",
        delete_subtask_api_view,
        name="subtask_delete",
    ),
]
