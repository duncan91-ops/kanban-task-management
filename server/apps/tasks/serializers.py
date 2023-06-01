from rest_framework import serializers

from .models import Task, Subtask


class SubtaskCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subtask
        fields = ["title"]


class TaskCreateSerializer(serializers.ModelSerializer):
    subtasks = SubtaskCreateSerializer(many=True)

    class Meta:
        model = Task
        fields = ["title", "description", "status", "subtasks"]

    def create(self, validated_data):
        board = self.context["board"]
        subtasks_data = validated_data.pop("subtasks")
        task = Task.objects.create(board=board, **validated_data)
        for subtask_data in subtasks_data:
            Subtask.objects.create(task=task, **subtask_data)
        return task


class SubtaskSerializer(serializers.ModelSerializer):
    id = serializers.UUIDField(required=False)

    class Meta:
        model = Subtask
        fields = ["id", "title", "completed"]


class TaskSerializer(serializers.ModelSerializer):
    subtasks = SubtaskSerializer(many=True)

    class Meta:
        model = Task
        fields = [
            "id",
            "title",
            "description",
            "status",
            "total_subtasks",
            "completed_subtasks",
            "subtasks",
        ]

    def update(self, instance, validated_data):
        subtasks_data = validated_data.pop("subtasks")
        instance.title = validated_data.get("title", instance.title)
        instance.description = validated_data.get("description", instance.description)
        instance.status = validated_data.get("status", instance.status)
        instance.save()
        current_subtasks_ids = Subtask.objects.filter(task=instance).values_list(
            "id", flat=True
        )
        new_subtasks_ids = []
        for subtask_data in subtasks_data:
            if "id" in subtask_data.keys():
                if Subtask.objects.filter(id=subtask_data["id"]).exists():
                    subtask_instance = Subtask.objects.get(id=subtask_data["id"])
                    subtask_instance.title = subtask_data.get(
                        "title", subtask_instance.title
                    )
                    if subtask_instance.completed == False and subtask_data.get(
                        "completed"
                    ):
                        instance.completed_subtasks += 1
                        instance.save()
                    subtask_instance.completed = subtask_data.get(
                        "completed", subtask_instance.completed
                    )
                    subtask_instance.save()
                    new_subtasks_ids.append(subtask_instance.id)
                else:
                    continue
            else:
                subtask_instance = Subtask.objects.create(task=instance, **subtask_data)
                new_subtasks_ids.append(subtask_instance.id)

        for id in current_subtasks_ids:
            if id not in new_subtasks_ids:
                subtask_instance = Subtask.objects.get(id=id)
                if subtask_instance.completed:
                    instance.completed_subtasks -= 1
                instance.total_subtasks -= 1
                instance.save()
                subtask_instance.delete()

        return instance
