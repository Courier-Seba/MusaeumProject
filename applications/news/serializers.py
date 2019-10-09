"""
# Api serializers of news
This module serializate the annoucement to pass as json in the api.
"""
from rest_framework import serializers
from .models import Announcement

class AnnouncementSerilizer(serializers.ModelSerializer):
    """Announcement serializer"""

    class Meta:
        model = Announcement
        fields = '__all__'
