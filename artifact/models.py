"""
# Artifact models.py
This module contains the artifact model. Represent an artefact or display of a
museum.
"""
from django.db import models
from musaeum_project.settings import AUTH_USER_MODEL as user

from musaeum_project.database_const import (
    SHORT_CHARFIEL_LENGTH,
    TEXT_FIELD_LENGTH,
    URL_FIELD_LENGTH,
)

from museum.models import Museum

# Create your models here.
class ArtifactTag(models.Model):
    """
    ## Artifact tag.
    * name: name of the tag.
    """
    name = models.TextField(max_length=TEXT_FIELD_LENGTH)

    def __str__(self):
        """ String of default title of tag """
        return self.name


class Artifact(models.Model):
    """
    ## Artifact model.
    * name: the name/title of the artifact.
    * picture: a sigle image of the artifact.
    * description: a large text field.
    * external_reference: an url to extra reference like a wikipedia link
    * museum: museum which it belong.
    * registrator: user who register the artifact.
    """

    name = models.CharField(max_length=SHORT_CHARFIEL_LENGTH, null=False)
    picture = models.ImageField(
        upload_to='artifacts/pictures',
        blank=True,
        null=True,
    )
    description = models.TextField(max_length=TEXT_FIELD_LENGTH)
    tags = models.ManyToManyField(ArtifactTag)
    external_reference = models.URLField(max_length=URL_FIELD_LENGTH)
    museum = models.ForeignKey(Museum, on_delete=models.CASCADE)
    registrator = models.ForeignKey(user, on_delete=models.CASCADE)

    def __str__(self):
        """ String of default artifact name """
        return self.name

