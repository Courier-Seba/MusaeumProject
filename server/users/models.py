"""User model."""

# Django
from django.db import models
from django.contrib.auth.models import AbstractUser
from django.core.validators import RegexValidator

from musaeum_project.database_const import (
    TEXT_FIELD_LENGTH,
    SHORT_CHARFIEL_LENGTH
)


class User(AbstractUser):
    """
    ## Extended user model of django AbstractUser
    """

    def __str__(self):
        return self.email


class UserData(models.Model):
    """
    ### User data.
    * user: the user wich it the model belongs
    * picture: a picture if for the profile
    * gender: a gender for the user
    * biography: a short biography
    * language: a 2 char string ISO 639-1 language code
    """
    user = models.OneToOneField(
        User,
        on_delete=models.CASCADE,
    )

    profile_picture = models.ImageField(
        'profile picture',
        upload_to='users/pictures/',
        blank=True,
        null=True,
    )
    biography = models.TextField(
        max_length=TEXT_FIELD_LENGTH,
        blank=True,
        null=True,
    )
    language = models.CharField(
        max_length=SHORT_CHARFIEL_LENGTH,
        blank=True,
        null=False,
        default="es" # Site default lang
    )


    def __str__(self):
        return self.user.email

class UserMessage(models.Model):
    """
    ## User message
    * sender: the user that sends the message
    * receiver: the user that recibe the message
    * status: boolean, true if readed by sender
    """
    sender = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        null=False,
        blank=False,
        related_name="senders"
    )
    receiver = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        null=False,
        blank=False,
        related_name="receivers"
    )
    status = models.BooleanField(default=False)
    message = models.TextField(default="")

