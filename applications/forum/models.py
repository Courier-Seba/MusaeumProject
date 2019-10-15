from django.db import models
from musaeum_project.settings import AUTH_USER_MODEL as user

from musaeum_project.database_const import (
    SHORT_CHARFIEL_LENGTH,
    TEXT_FIELD_LENGTH,
    URL_FIELD_LENGTH,
)

# Create your models here.
class PostTag(models.Model):
    """
    ## Post tag for search
    * name: name of the tag
    """
    name = models.TextField(max_length=TEXT_FIELD_LENGTH)

class Post(models.Model):
    """
    ## Forum post model
    * title: the post title
    * tags: tags to search
    * content: markdown file to render text
    """
    title = models.CharField(max_length=SHORT_CHARFIEL_LENGTH, null=False)
    tags = models.ManyToManyField(PostTag, blank=True)
    owner = models.ForeignKey(user, on_delete=models.CASCADE)

