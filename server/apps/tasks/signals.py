import logging
from django.db.models.signals import post_save
from django.dispatch import receiver

from .models import Subtask

logger = logging.getLogger(__name__)


@receiver(post_save, sender=Subtask)
def update_subtasks_count(sender, instance, created, **kwargs):
    if created:
        task = instance.task
        task.total_subtasks += 1
        task.save()
