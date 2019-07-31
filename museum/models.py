"""
Models of the museum app domain.
"""
from django.db import models
from musaeum_project.settings import AUTH_USER_MODEL as user

from musaeum_project.database_const import SHORT_CHARFIEL_LENGTH, LONG_CHARFIEL_LENGTH


class Museum(models.Model):
    """Museum model, represents a museum. """

    administrator = models.ForeignKey(user, on_delete=models.CASCADE)

    short_name = models.CharField(max_length=SHORT_CHARFIEL_LENGTH)
    complete_name = models.CharField(max_length=LONG_CHARFIEL_LENGTH)
    country = models.CharField(max_length=SHORT_CHARFIEL_LENGTH)
    city = models.CharField(max_length=SHORT_CHARFIEL_LENGTH)
    street = models.CharField(max_length=LONG_CHARFIEL_LENGTH)

    def __str__(self):
        return self.short_name


class Author(models.Model):
    """Authors model, represents an artifact author"""

    name = models.CharField(max_length=SHORT_CHARFIEL_LENGTH)
    birth = models.DateField(null=True, blank=True)
    nationality = models.CharField(
        blank=True,
        null=True,
        max_length=SHORT_CHARFIEL_LENGTH
    )

    def __str__(self):
        return self.name


class Artifact(models.Model):
    """Artifact model, represent an artefact or display of a museum"""

    registrator = models.ForeignKey(user, on_delete=models.CASCADE)

    name = models.CharField(max_length=SHORT_CHARFIEL_LENGTH)
    author = models.ForeignKey('Author', null=True, on_delete=models.SET_NULL)
    picture = models.ImageField(
        'artifact picture',
        upload_to='museum/pictures/',
        blank=True,
        null=True,
    )
    description = models.TextField()
    museum = models.ForeignKey('Museum', on_delete=models.CASCADE)

    def __str__(self):
        return self.name

class Monument(models.Model):
    """Monument model."""

    registrator = models.ForeignKey(user, on_delete=models.CASCADE)

    name = models.CharField(max_length=SHORT_CHARFIEL_LENGTH)
    author = models.ForeignKey('Author', null=True, on_delete=models.SET_NULL)
    description = models.TextField()
    museum = models.ForeignKey('Museum', null=True, blank=True, on_delete=models.CASCADE)

    def __str__(self):
        return self.name
