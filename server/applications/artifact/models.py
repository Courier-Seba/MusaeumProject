"""
# Artifact models.py
This module contains the artifact model. Represent an artefact or display of a
museum.
"""
from django.db import models
from musaeum_project.settings import AUTH_USER_MODEL as user

from musaeum_project.database_const import (
    SHORT_CHARFIEL_LENGTH,
    LONG_CHARFIEL_LENGTH,
    TEXT_FIELD_LENGTH,
    URL_FIELD_LENGTH,
)

from applications.museum.models import Museum

# Create your models here.
class ArtifactCollection(models.Model):
    """
    ## Artifact Collection model
    * title: reference name of the collection
    * favorited: to priorize collection
    """
    title = models.CharField(max_length=SHORT_CHARFIEL_LENGTH, null=False)
    description = models.TextField(max_length=TEXT_FIELD_LENGTH)
    museum = models.ForeignKey(Museum, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        """ String of default artifact name """
        return self.title


class ArtifactTag(models.Model):
    """
    ## Artifact tag.
    * name: name of the tag.
    """
    name = models.TextField(max_length=TEXT_FIELD_LENGTH)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        """ String of default title of tag """
        return self.name


class Artifact(models.Model):
    """
    ## Artifact model.
    * name: the name/title of the artifact.
    * description: a large text field.
    * external_reference: an url to extra reference like a wikipedia link
    * museum: museum which it belong.
    * registrator: user who register the artifact.
    """

    name = models.CharField(max_length=SHORT_CHARFIEL_LENGTH, null=False)
    description = models.TextField(max_length=TEXT_FIELD_LENGTH)
    museum = models.ForeignKey(Museum, on_delete=models.CASCADE)
    tags = models.ManyToManyField(ArtifactTag, blank=True)
    collection = models.ManyToManyField(
        ArtifactCollection,
        blank=True
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        """ String of default artifact name """
        return self.name

class ArtifactImage(models.Model):
    """
    ## Artifact image model
    """
    artifact = models.ForeignKey(Artifact, on_delete=models.CASCADE)
    image = models.ImageField(
        upload_to='artifacts/pictures',
        blank=False,
        null=False
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class ArtifactComment(models.Model):
    """
    ## Artifact Model
    A comment of an artifact
    """
    artifact = models.ForeignKey(Artifact, on_delete=models.CASCADE)
    user = models.ForeignKey(user, on_delete=models.CASCADE)
    message = models.CharField(max_length=LONG_CHARFIEL_LENGTH)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

