from django.contrib.auth import get_user_model
from django.db import models
from django.utils.translation import gettext_lazy as _

from apps.common.models import TimeStampedUUIDModel

CustomUser = get_user_model()


class Board(TimeStampedUUIDModel):
    user = models.ForeignKey(
        CustomUser, on_delete=models.CASCADE, related_name="boards"
    )
    name = models.CharField(verbose_name=_("Board Name"), max_length=100)

    class Meta:
        unique_together = ["user", "name"]

    def __str__(self):
        return f"{self.name} Board"

    def save(self, *args, **kwargs):
        self.name = str.title(self.name)
        return super(Board, self).save(*args, **kwargs)


class Column(TimeStampedUUIDModel):
    board = models.ForeignKey(Board, on_delete=models.CASCADE, related_name="columns")
    name = models.CharField(verbose_name=_("Column Name"), max_length=20)

    class Meta:
        unique_together = ["board", "name"]

    def __str__(self):
        return f"{self.name} Column"

    def save(self, *args, **kwargs):
        self.name = str.title(self.name)
        return super(Column, self).save(*args, **kwargs)
