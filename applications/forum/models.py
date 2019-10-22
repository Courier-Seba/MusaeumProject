from django.db import models
from django.core.validators import FileExtensionValidator
from musaeum_project.settings import AUTH_USER_MODEL as user

from musaeum_project.database_const import (
    SHORT_CHARFIEL_LENGTH,
    LONG_CHARFIEL_LENGTH,
    LARGE_TEXT_FIELD_LENGTH,
)

# Create your models here.
class PostTag(models.Model):
    """
    ## Post tag for search
    * name: name of the tag
    """
    name = models.CharField(max_length=LONG_CHARFIEL_LENGTH)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class Post(models.Model):
    """
    ## Forum post model
    * title: the post title
    * tags: tags to search
    * content: markdown file to render text
    """
    title = models.CharField(max_length=SHORT_CHARFIEL_LENGTH, null=False)
    tags = models.ManyToManyField(PostTag, blank=True)
    content = models.TextField(
        null=False, blank=False,
        max_length=LARGE_TEXT_FIELD_LENGTH
    )
    owner = models.ForeignKey(user, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class Comment(models.Model):
    """
    ## Post/comment Comment
    * content: text content
    """
    content = models.TextField(
        null=False, blank=True,
        max_length=LARGE_TEXT_FIELD_LENGTH
    )
    post = models.ForeignKey(Post, null=True, on_delete=models.SET_NULL)
    owner = models.ForeignKey(user, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
