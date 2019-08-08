"""
# Monument models.py
This module contains the models of monuments external to a museum.
"""
from django.db import models
from musaeum_project.settings import AUTH_USER_MODEL as user

from musaeum_project.database_const import (
    SHORT_CHARFIEL_LENGTH,
    URL_FIELD_LENGTH,
    TEXT_FIELD_LENGTH,
)

class Monument(models.Model):
    """
    ## Monument model
    * name: name/title of the monument
    * description: a description of the monument
    * external reference: an url to and exteranal site
    * registrator: user that register the artifact
    """

    name = models.CharField(max_length=SHORT_CHARFIEL_LENGTH)
    description = models.TextField(max_length=TEXT_FIELD_LENGTH)
    external_reference = models.URLField(max_length=URL_FIELD_LENGTH)

    registrator = models.ForeignKey(user, on_delete=models.CASCADE)

    def __str__(self):
        return self.name
