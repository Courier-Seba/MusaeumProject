from django.db import models
from musaeum_project.settings import AUTH_USER_MODEL as user

from musaeum_project.database_const import SHORT_CHARFIEL_LENGTH, LONG_CHARFIEL_LENGTH

from museum.models import Museum
# Create your models here.

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
        upload_to='artifacts/pictures',
        blank=True,
        null=True,
    )
    description = models.TextField()
    museum = models.ForeignKey(Museum, on_delete=models.CASCADE)
    artifact_picture = models.ImageField(
        upload_to="artifacts", null=True, blank=True)

    def __str__(self):
        return self.name
