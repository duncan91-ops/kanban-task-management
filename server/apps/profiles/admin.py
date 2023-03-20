from django.contrib import admin

from .models import Profile, ProfilePhoto


class ProfilePhotoInline(admin.StackedInline):
    model = ProfilePhoto


class ProfileAdmin(admin.ModelAdmin):
    inlines = [
        ProfilePhotoInline,
    ]
    list_display = ['pkid', 'id', 'user', 'phone_number', 'gender', 'country', 'city']
    list_display_links = ['id', 'user']
    list_filter = ['user', 'gender', 'country', 'city']


admin.site.register(Profile, ProfileAdmin)