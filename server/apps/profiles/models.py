from django.conf import settings
from django.contrib.auth import get_user_model
from django.db import models
from django.utils.translation import gettext_lazy as _

from django_countries.fields import CountryField
from phonenumber_field.modelfields import PhoneNumberField

from apps.common.models import TimeStampedUUIDModel

CustomUser = get_user_model()


class Profile(TimeStampedUUIDModel):
    class Gender(models.TextChoices):
        MALE = "Male", _("Male")
        FEMALE = "Female", _("Female")
        OTHER = "Other", _("Other")

    user = models.OneToOneField(
        CustomUser, on_delete=models.CASCADE, related_name="profile"
    )
    phone_number = PhoneNumberField(
        verbose_name=_("Phone Number"), max_length=30, default="+2547XXXXXXXX"
    )
    gender = models.CharField(
        verbose_name=_("Gender"),
        max_length=20,
        choices=Gender.choices,
        default=Gender.OTHER,
    )
    about_me = models.TextField(
        verbose_name=_("About Me"), default="Say something about yourself"
    )
    country = CountryField(
        verbose_name=_("Country"), default="KE", blank=False, null=False
    )
    city = models.CharField(
        verbose_name=_("City"),
        max_length=180,
        default="Nairobi",
        blank=False,
        null=False,
    )

    def __str__(self):
        return f"{self.user.email}'s profile"


class ProfilePhoto(models.Model):
    profile = models.OneToOneField(
        Profile, on_delete=models.CASCADE, related_name="profile_photo"
    )
    small = models.URLField(
        verbose_name=_("Small sized Profile Photo URL"),
        max_length=500,
        default=f"https://storage.googleapis.com/{settings.STORAGE_BUCKET}/small/profile_default.png",
    )
    medium = models.URLField(
        verbose_name=_("medium sized Profile Photo URL"),
        max_length=500,
        default=f"https://storage.googleapis.com/{settings.STORAGE_BUCKET}/medium/profile_default.png",
    )
    large = models.URLField(
        verbose_name=_("large sized Profile Photo URL"),
        max_length=500,
        default=f"https://storage.googleapis.com/{settings.STORAGE_BUCKET}/large/profile_default.png",
    )

    def __str__(self):
        return f"{self.profile.user.email}'s profile photo"
