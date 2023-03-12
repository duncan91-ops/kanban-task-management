from rest_framework import serializers

from .models import Task, Subtask


class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = [
            "id",
            "title",
            "description",
            "status",
            "total_subtasks",
            "completed_subtasks",
        ]


class SubtaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subtask
        fields = ["id", "title", "completed"]


class CreateSubtaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subtask
        fields = ["title"]


class CreateTaskSerializer(serializers.ModelSerializer):
    subtasks = CreateSubtaskSerializer(many=True)

    class Meta:
        model = Task
        fields = ["title", "description", "status", "subtasks"]

    def create(self, validated_data):
        subtasks_data = validated_data.pop("subtasks")
        task = Task.objects.create(**validated_data)
        for subtask_data in subtasks_data:
            Subtask.objects.create(task=task, **subtask_data)
        return task


class UpdateTaskSerializer(serializers.ModelSerializer):
    subtasks = SubtaskSerializer(many=True)

    class Meta:
        model = Task
        fields = ["id", "title", "description", "status", "subtasks"]

    def update(self, instance, validated_data):
        subtasks_data = validated_data.pop("subtasks")
        instance.title = validated_data.get("title", instance.title)
        instance.description = validated_data.get("description", instance.description)
        instance.status = validated_data.get("status", instance.status)
        instance.save

        for subtask_data in subtasks_data:
            id = subtask_data.get("id", None)
            if id is None:
                Subtask.objects.create(**validated_data)
                continue
            subtask = Subtask.objects.get(id=id)
            subtask.title = subtask_data.get("title", subtask.title)
            subtask.completed = subtask_data.get("completed", subtask.completed)
            subtask.save()
        return instance
