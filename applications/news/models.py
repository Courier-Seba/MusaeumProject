"""
# News models.py
This module contains the Announcement model.
"""
from django.db import models
from musaeum_project.database_const import (
    LONG_CHARFIEL_LENGTH,
    TEXT_FIELD_LENGTH
)

# Create your models here.

class Announcement(models.Model):
    """
    ## Announcement
    * title: Title
    * body: Genereal information about the annoucement
    * date: Date of the annoucement
    """
    title = models.CharField(max_length=LONG_CHARFIEL_LENGTH)
    body = models.TextField(max_length=TEXT_FIELD_LENGTH)
    date = models.DateTimeField(auto_now_add=True)
    LANG_CHOICES = [
        ('ES', 'Español'),
        ('EN', 'English'),
    ]
    lang = models.CharField(
        max_length=2,
        choices=LANG_CHOICES,
        default='ES'
    )

    def __str__(self):
        """String to be title"""
        return self.title
