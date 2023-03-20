from django.contrib import admin

from .models import Board, Column


class ColumnInline(admin.TabularInline):
    model = Column
    list_display = ["name"]


class BoardAdmin(admin.ModelAdmin):
    inlines = [
        ColumnInline,
    ]
    list_display = ["pkid", "id", "name"]
    list_display_links = ["id", "name"]
    list_filter = ["name"]


admin.site.register(Board, BoardAdmin)
