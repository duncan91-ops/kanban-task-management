import pytest


def test_profile_str(profile):
    """Test profile string representation"""
    assert profile.__str__() == f"{profile.user.email}'s profile"


def test_profile_photo_str(profile_photo):
    """Test profile photo string representation"""
    assert (
        profile_photo.__str__() == f"{profile_photo.profile.user.email}'s profile photo"
    )
