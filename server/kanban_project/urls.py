from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/v1/auth/", include("djoser.urls")),
    path("api/v1/auth/", include("djoser.urls.jwt")),
    path("api/v1/boards/", include("apps.boards.urls")),
    path("api/v1/profile/", include("apps.profiles.urls")),
    path("api/v1/tasks/", include("apps.tasks.urls")),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

admin.site.site_header = "Kanban Admin"
admin.site.site_title = "Kanban Admin Portal"
admin.site.index_title = "Welcome to the Kanban Portal"
