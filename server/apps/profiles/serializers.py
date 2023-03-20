from django_countries.serializer_fields import CountryField
from rest_framework import serializers

from .models import Profile, ProfilePhoto


class ProfilePhotoSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProfilePhoto
        fields = ["small", "medium", "large"]


class ProfileSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(source="user.email")
    first_name = serializers.CharField(source="user.first_name")
    last_name = serializers.CharField(source="user.last_name")
    full_name = serializers.SerializerMethodField(read_only=True)
    country = CountryField(name_only=True)
    profile_photo = ProfilePhotoSerializer()

    class Meta:
        model = Profile
        fields = [
            "id",
            "first_name",
            "last_name",
            "full_name",
            "email",
            "gender",
            "phone_number",
            "about_me",
            "country",
            "city",
            "profile_photo",
        ]

    def get_full_name(self, obj):
        first_name = obj.user.first_name.title()
        last_name = obj.user.last_name.title()
        return f"{first_name} {last_name}"


class UpdateProfileSerializer(serializers.ModelSerializer):
    country = CountryField(name_only=True)

    class Meta:
        model = Profile
        fields = ["gender", "phone_number", "about_me", "country", "city"]
