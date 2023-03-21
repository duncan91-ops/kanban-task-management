import pytest


def test_user_str(base_user):
    """Test user string representation"""
    assert base_user.__str__() == f"{base_user.email}"


def test_user_short_name(base_user):
    """Test user get_short_name method"""
    assert base_user.get_short_name() == f"{base_user.first_name.title()}"


def test_user_full_name(base_user):
    """Test user get_full_name property"""
    assert (
        base_user.get_full_name
        == f"{base_user.first_name.title()} {base_user.last_name.title()}"
    )


def test_base_user_email_is_normalized(base_user):
    """Test base user email is normalized"""
    email = "duncan@KANBAN.com"
    assert base_user.email == email.lower()


def test_super_user_email_is_normalized(super_user):
    """Test super user email is normalized"""
    email = "duncan@KANBAN.com"
    assert super_user.email == email.lower()


def test_super_user_is_not_staff(user_factory):
    """Test that an error is raised when admin has is_staff set to False"""
    with pytest.raises(ValueError) as err:
        user_factory.create(is_superuser=True, is_staff=False)
    assert str(err.value) == "Superusers must have is_staff=True"


def test_super_user_is_not_superuser(user_factory):
    """Test that an error is raised when admin has is_superuser set to False"""
    with pytest.raises(ValueError) as err:
        user_factory.create(is_superuser=False, is_staff=True)
    assert str(err.value) == "Superusers must have is_superuser=True"


def test_create_user_with_no_email(user_factory):
    """Test that an error is raised when user does not provide email"""
    with pytest.raises(ValueError) as err:
        user_factory.create(email=None)
    assert str(err.value) == "Base User Account: An email address is required"


def test_create_user_with_no_first_name(user_factory):
    """Test that an error is raised when user does not provide first name"""
    with pytest.raises(ValueError) as err:
        user_factory.create(first_name=None)
    assert str(err.value) == "Users must submit a first name"


def test_create_user_with_no_last_name(user_factory):
    """Test that an error is raised when user does not provide last name"""
    with pytest.raises(ValueError) as err:
        user_factory.create(last_name=None)
    assert str(err.value) == "Users must submit a last name"


def test_create_super_user_with_no_email(user_factory):
    """Test that an error is raised when super user does not provide email"""
    with pytest.raises(ValueError) as err:
        user_factory.create(email=None, is_superuser=True, is_staff=True)
    assert str(err.value) == "Admin Account: An email address is required"


def test_create_super_user_with_no_password(user_factory):
    """Test that an error is raised when super user does not provide password"""
    with pytest.raises(ValueError) as err:
        user_factory.create(password=None, is_superuser=True, is_staff=True)
    assert str(err.value) == "Superusers must have a password"


def test_user_email_incorrect(user_factory):
    """Test that an error is raised when non valid email is provided"""
    with pytest.raises(ValueError) as err:
        user_factory.create(email="kanban.com")
    assert str(err.value) == "You must provide a valid email address"
