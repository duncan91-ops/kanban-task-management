# Generated by Django 4.1.7 on 2023-03-14 11:07

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("tasks", "0001_initial"),
    ]

    operations = [
        migrations.AlterField(
            model_name="task",
            name="description",
            field=models.TextField(blank=True, verbose_name="Task Description"),
        ),
    ]
