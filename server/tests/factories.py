from django.contrib.auth import get_user_model
from django.db.models.signals import post_save

import factory
from faker import Factory as FakerFactory

from apps.boards.models import Board, Column
from apps.profiles.models import Profile, ProfilePhoto

CustomUser = get_user_model()
faker = FakerFactory.create()


@factory.django.mute_signals(post_save)
class ProfilePhotoFactory(factory.django.DjangoModelFactory):
    profile = factory.SubFactory("tests.factories.ProfileFactory")
    small = factory.LazyAttribute(lambda x: faker.image_url(width=100, height=100))
    medium = factory.LazyAttribute(lambda x: faker.image_url(width=200, height=200))
    large = factory.LazyAttribute(lambda x: faker.image_url(width=300, height=300))

    class Meta:
        model = ProfilePhoto


@factory.django.mute_signals(post_save)
class ProfileFactory(factory.django.DjangoModelFactory):
    user = factory.SubFactory("tests.factories.UserFactory")
    phone_number = factory.LazyAttribute(lambda x: faker.phone_number())
    gender = factory.LazyAttribute(lambda x: f"Other")
    about_me = factory.LazyAttribute(lambda x: faker.sentence(nb_words=6))
    country = factory.LazyAttribute(lambda x: faker.country_code())
    city = factory.LazyAttribute(lambda x: faker.city())

    class Meta:
        model = Profile


@factory.django.mute_signals(post_save)
class UserFactory(factory.django.DjangoModelFactory):
    email = factory.LazyAttribute(lambda x: f"duncan@kanban.com")
    first_name = factory.LazyAttribute(lambda x: faker.first_name())
    last_name = factory.LazyAttribute(lambda x: faker.last_name())
    password = factory.LazyAttribute(lambda x: faker.password())
    is_active = True
    is_staff = False

    class Meta:
        model = CustomUser

    @classmethod
    def _create(cls, model_class, *args, **kwargs):
        manager = cls._get_manager(model_class)
        if "is_superuser" in kwargs:
            return manager.create_superuser(*args, **kwargs)
        return manager.create_user(*args, **kwargs)


@factory.django.mute_signals(post_save)
class ColumnFactory(factory.django.DjangoModelFactory):
    board = factory.SubFactory("tests.factories.BoardFactory")
    name = factory.LazyAttribute(lambda x: faker.text(max_nb_chars=6))

    class Meta:
        model = Column


@factory.django.mute_signals(post_save)
class BoardFactory(factory.django.DjangoModelFactory):
    user = factory.SubFactory("tests.factories.UserFactory")
    name = factory.LazyAttribute(lambda x: faker.sentence(nb_words=3))

    class Meta:
        model = Board
