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

    def update(self, instance, validated_data):
        try:
            columns_data = validated_data.pop("columns")
        except KeyError:
            columns_data = []
        instance.name = validated_data.get("name", instance.name)
        instance.save()
        for column_data in columns_data:
            columns = Column.objects.filter(board=instance)
            for column in columns:
                column.delete()
            Column.objects.create(board=instance, **column_data)
        return instance
