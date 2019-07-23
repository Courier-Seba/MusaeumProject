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


class Artifact(models.Model):
    """Artifact model, represent an artefact or display of a museum"""

    registrator = models.ForeignKey(user, on_delete=models.CASCADE)

    name = models.CharField(max_length=SHORT_CHARFIEL_LENGTH)
    description = models.TextField()
    museum = models.ForeignKey('Museum', on_delete=models.CASCADE)

    def __str__(self):
        return self.name
