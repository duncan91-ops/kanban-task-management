from rest_framework import serializers

from .models import Board, Column


class ColumnSerializer(serializers.ModelSerializer):
    class Meta:
        model = Column
        fields = ["id", "name"]


class BoardSerializer(serializers.ModelSerializer):
    columns = ColumnSerializer(many=True)

    class Meta:
        model = Board
        fields = ["id", "name", "columns"]

    def create(self, validated_data, user):
        columns_data = validated_data.pop("columns")
        board = Board.objects.create(user=user, **validated_data)
        for column_data in columns_data:
            Column.objects.create(board=board, **column_data)
        return board

    def update(self, instance, validated_data):
        columns_data = validated_data.pop("columns") or []
        instance.name = validated_data.get("name", instance.name)
        instance.save()
        for column_data in columns_data:
            id = column_data.get("id", None)
            if id is None:
                Column.objects.create(board=instance, **column_data)
                continue
            column = Column.objects.get(id=id)
            column.name = column_data.get("name", column.name)
            column.save()
        return instance
