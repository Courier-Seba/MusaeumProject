"""User model."""

#Django
from django.db import models
from django.contrib.auth.models import AbstractUser
from django.core.validators import RegexValidator



class BaseUser(AbstractUser, models.Model):

    email = models.EmailField(
            'email address',
            unique=True,
            error_messages={
                'unique': 'A user with that email already exists.'
            }
        )

    phone_regex = RegexValidator(
        regex=r'\+?1?\d{9,15}$',
        message="Phone number must be entered in the format: +999999999. Up to 15 digits allowed."
    )
    phone_number = models.CharField(validators=[phone_regex], max_length=17, blank=True)

    biography = models.TextField(max_length=500, blank=True)

    picture = models.ImageField(
    'profile picture',
    upload_to='users/pictures/',
    blank=True,
    null=True,
    )

    created = models.DateTimeField(
        'created at',
        auto_now_add=True,
        help_text='Date time on which the object was created.'
    )
    modified = models.DateTimeField(
        'modified at',
        auto_now=True,
        help_text='Date time on which the object was last modified.'
    )
