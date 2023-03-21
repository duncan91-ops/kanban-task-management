import pytest
from pytest_factoryboy import register

from tests.factories import (
    ProfilePhotoFactory,
    ProfileFactory,
    UserFactory,
    ColumnFactory,
    BoardFactory,
)

register(ProfilePhotoFactory)
register(ProfileFactory)
register(UserFactory)
register(ColumnFactory)
register(BoardFactory)


@pytest.fixture
def base_user(db, user_factory):
    new_user = user_factory.create()
    return new_user


@pytest.fixture
def super_user(db, user_factory):
    new_user = user_factory.create(is_superuser=True, is_staff=True)
    return new_user


@pytest.fixture
def profile(db, profile_factory):
    user_profile = profile_factory.create()
    return user_profile


@pytest.fixture
def profile_photo(db, profile_photo_factory):
    user_profile_photo = profile_photo_factory.create()
    return user_profile_photo


@pytest.fixture
def board(db, board_factory):
    user_board = board_factory.create()
    return user_board


@pytest.fixture
def column(db, column_factory):
    board_column = column_factory.create()
    return board_column
