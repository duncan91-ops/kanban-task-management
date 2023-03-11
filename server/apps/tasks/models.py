from django.db import models
from django.utils.translation import gettext_lazy as _

from apps.boards.models import Board
from apps.common.models import TimeStampedUUIDModel


class Task(TimeStampedUUIDModel):
    board = models.ForeignKey(Board, on_delete=models.CASCADE, related_name="tasks")
    title = models.CharField(verbose_name=_("Task Title"), max_length=150)
    description = models.TextField(verbose_name=_("Task Description"))
    status = models.CharField(verbose_name=_("Task Status"), max_length=20)
    total_subtasks = models.IntegerField(
        verbose_name=_("Total Number of Subtasks"), default=0
    )
    completed_subtasks = models.IntegerField(
        verbose_name=_("Number of Completed Subtasks"), default=0
    )

    class Meta:
        unique_together = ["board", "title"]

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        self.title = str.capitalize(self.title[0]) + self.title[1:]
        self.description = str.capitalize(self.description[0]) + self.description[1:]
        return self.save(Task, self).save(*args, **kwargs)


class Subtask(TimeStampedUUIDModel):
    task = models.ForeignKey(Task, on_delete=models.CASCADE, related_name="subtasks")
    title = models.CharField(verbose_name=_("Subtask Title"), max_length=150)
    completed = models.BooleanField(default=False)

    class Meta:
        unique_together = ["task", "title"]

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        self.title = str.capitalize(self.title[0]) + self.title[1:]
        return self.save(Task, self).save(*args, **kwargs)
