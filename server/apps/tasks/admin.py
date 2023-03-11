from django.contrib import admin

from .models import Task, Subtask


class SubtaskInline(admin.TabularInline):
    model = Subtask


class TaskAdmin(admin.ModelAdmin):
    list_display = [
        "pkid",
        "id",
        "board",
        "title",
        "status",
        "total_subtasks",
        "completed_subtasks",
    ]
    list_display_links = ["id", "title"]
    list_filter = ["board"]


admin.site.register(Task, TaskAdmin)
