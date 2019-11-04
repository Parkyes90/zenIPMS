from django.contrib.auth import get_user_model
from django.test import TestCase


def sample_user(username="test", email="test@test.com", password="testpass"):
    """Create a sample User"""

    return get_user_model().objects.create_user(username, email, password)


class UserModelTests(TestCase):
    def test_create_user_successful(self):
        """Test Creating a new user is successful"""
        username = "test2"
        email = "test2@test.com"
        password = "test123"
        user = get_user_model().objects.create_user(username, email, password)
        self.assertEqual(user.username, username)
        self.assertTrue(user.check_password(password))

    def test_create_new_super_user(self):
        """Test creating a new superuser"""
        user = get_user_model().objects.create_superuser(
            "test234", "test@test.com", "test1234"
        )
        self.assertTrue(user.is_superuser)
        self.assertTrue(user.is_staff)
