from __future__ import absolute_import
import os
from celery import Celery
from kanban_project.settings import base

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "kanban_project.settings.development")

app = Celery("kanban")

app.config_from_object("kanban_project.settings.development", namespace="CELERY")

app.autodiscover_tasks(lambda: base.INSTALLED_APPS)
