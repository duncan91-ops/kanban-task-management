from rest_framework import serializers

from .models import Board, Column


class ColumnCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Column
        fields = ["name"]


class BoardCreateSerializer(serializers.ModelSerializer):
    columns = ColumnCreateSerializer(many=True)

    class Meta:
        model = Board
        fields = ["id", "name", "columns"]

    def create(self, validated_data):
        user = self.context["request"].user
        try:
            columns_data = validated_data.pop("columns")
        except KeyError:
            columns_data = []
        board = Board.objects.create(user=user, **validated_data)
        for column_data in columns_data:
            Column.objects.create(board=board, **column_data)
        return board


class ColumnSerializer(serializers.ModelSerializer):
    id = serializers.UUIDField(required=False)

    class Meta:
        model = Column
        fields = ["id", "name"]


class BoardSerializer(serializers.ModelSerializer):
    columns = ColumnSerializer(many=True)

    class Meta:
        model = Board
        fields = ["id", "name", "columns"]

    def update(self, instance, validated_data):
        columns_data = validated_data.pop("columns")
        instance.name = validated_data.get("name", instance.name)
        instance.save()
        current_column_ids = Column.objects.filter(board=instance).values_list(
            "id", flat=True
        )
        new_column_ids = []
        for column_data in columns_data:
            if "id" in column_data.keys() and column_data["id"]:
                if Column.objects.filter(id=column_data["id"]).exists():
                    column_instance = Column.objects.get(id=column_data["id"])
                    column_instance.name = column_data.get("name", column_instance.name)
                    column_instance.save()
                    new_column_ids.append(column_instance.id)
                else:
                    continue
            else:
                column_instance = Column.objects.create(board=instance, **column_data)
                new_column_ids.append(column_instance.id)

        for id in current_column_ids:
            if id not in new_column_ids:
                Column.objects.filter(id=id).delete()
            # columns = Column.objects.filter(board=instance)
            # for column in columns:
            #     column.delete()
            # Column.objects.create(board=instance, **column_data)
        return instance
