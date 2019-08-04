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

class Monument(models.Model):
    """Monument model."""

    registrator = models.ForeignKey(user, on_delete=models.CASCADE)

    name = models.CharField(max_length=SHORT_CHARFIEL_LENGTH)
    author = models.ForeignKey('Author', null=True, on_delete=models.SET_NULL)
    description = models.TextField()
    museum = models.ForeignKey(Museum, null=True, blank=True, on_delete=models.CASCADE)

    def __str__(self):
        return self.name
