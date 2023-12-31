# Generated by Django 4.1.7 on 2023-03-14 06:23

from django.db import migrations, models
import django.db.models.deletion
import uuid


class Migration(migrations.Migration):
    initial = True

    dependencies = [
        ("boards", "0001_initial"),
    ]

    operations = [
        migrations.CreateModel(
            name="Task",
            fields=[
                (
                    "pkid",
                    models.BigAutoField(
                        editable=False, primary_key=True, serialize=False
                    ),
                ),
                (
                    "id",
                    models.UUIDField(default=uuid.uuid4, editable=False, unique=True),
                ),
                ("created_at", models.DateTimeField(auto_now_add=True)),
                ("updated_at", models.DateTimeField(auto_now=True)),
                ("title", models.CharField(max_length=150, verbose_name="Task Title")),
                ("description", models.TextField(verbose_name="Task Description")),
                ("status", models.CharField(max_length=20, verbose_name="Task Status")),
                (
                    "total_subtasks",
                    models.IntegerField(
                        default=0, verbose_name="Total Number of Subtasks"
                    ),
                ),
                (
                    "completed_subtasks",
                    models.IntegerField(
                        default=0, verbose_name="Number of Completed Subtasks"
                    ),
                ),
                (
                    "board",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="tasks",
                        to="boards.board",
                    ),
                ),
            ],
            options={
                "unique_together": {("board", "title")},
            },
        ),
        migrations.CreateModel(
            name="Subtask",
            fields=[
                (
                    "pkid",
                    models.BigAutoField(
                        editable=False, primary_key=True, serialize=False
                    ),
                ),
                (
                    "id",
                    models.UUIDField(default=uuid.uuid4, editable=False, unique=True),
                ),
                ("created_at", models.DateTimeField(auto_now_add=True)),
                ("updated_at", models.DateTimeField(auto_now=True)),
                (
                    "title",
                    models.CharField(max_length=150, verbose_name="Subtask Title"),
                ),
                ("completed", models.BooleanField(default=False)),
                (
                    "task",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="subtasks",
                        to="tasks.task",
                    ),
                ),
            ],
            options={
                "unique_together": {("task", "title")},
            },
        ),
    ]
