from rest_framework import generics, permissions, status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.views import APIView

from .exceptions import ProfileNotFound, NotYourProfile
from .models import Profile, ProfilePhoto
from .renderers import ProfileJSONRenderer
from .serializers import ProfileSerializer, UpdateProfileSerializer
from .utils import upload_image


class GetProfileAPIView(generics.RetrieveAPIView):
    permission_classes = [permissions.IsAuthenticated]
    renderer_classes = [ProfileJSONRenderer]
    serializer_class = ProfileSerializer

    def get_queryset(self):
        user = self.request.user
        queryset = Profile.objects.get(user=user)
        return queryset


class UpdateProfileAPIView(APIView):
    permission_classes = [permissions.IsAuthenticated]
    renderer_classes = [ProfileJSONRenderer]

    def patch(self, request, email):
        try:
            Profile.objects.get(user__email=email)
        except Profile.DoesNotExist:
            raise ProfileNotFound

        user_email = request.user.email
        if user_email != email:
            raise NotYourProfile

        data = request.data
        serializer = UpdateProfileSerializer(
            instance=request.user.profile, data=data, partial=True
        )

        serializer.is_valid()
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(["POST"])
@permission_classes([permissions.IsAuthenticated])
def upload_profile_photo(request, profile_id):
    try:
        Profile.objects.get(id=profile_id)
    except Profile.DoesNotExist:
        raise ProfileNotFound

    user_profile_id = request.user.profile.id
    if user_profile_id != profile_id:
        raise NotYourProfile

    profile_pic = request.FILES.get("profile_photo")
    profile_photo = ProfilePhoto.objects.get(profile__id=profile_id)
    sizes = ((100, 100), (200, 200), (300, 300))
    size_strs = ("small", "medium", "large")

    for size, size_str in zip(sizes, size_strs):
        image_url = upload_image(profile_pic, profile_id, size, size_str)
        if size_str == "small":
            profile_photo.small = image_url
        if size_str == "medium":
            profile_photo.medium = image_url
        if size_str == "large":
            profile_photo.large = image_url

    profile_photo.save()
    profile = profile_photo.profile
    serializer = ProfileSerializer(profile, context={"request": request})
    return Response(serializer.data, status=status.HTTP_200_OK)
