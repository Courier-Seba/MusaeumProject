"""User model."""

# Django
from django.db import models
from django.contrib.auth.models import AbstractUser
from django.core.validators import RegexValidator

from musaeum_project.database_const import (
    TEXT_FIELD_LENGTH,
    SHORT_CHARFIEL_LENGTH
)


class UserData(models.Model):
    """
    ### User data.
    * picture: a picture if for the profile
    * gender: a gender for the user
    * biography: a short biography
    """
    picture = models.ImageField(
        'profile picture',
        upload_to='users/pictures/',
        blank=True,
        null=True,
    )
    gender = models.CharField(
        max_length=SHORT_CHARFIEL_LENGTH,
        blank=True,
        null=True,
    )
    biography = models.TextField(
        max_length=TEXT_FIELD_LENGTH,
        blank=True,
        null=True,
    )

    def __str__(self):
        return self.id


class User(AbstractUser):
    """
    ## Extended user model of django AbstractUser
    * data: relation to the data model
    """
    data = models.OneToOneField(
        UserData,
        on_delete=models.CASCADE,
        null=True,
        blank=True
    )

    def __str__(self):
        return self.email


