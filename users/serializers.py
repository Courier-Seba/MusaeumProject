"""
# User serializer
This module serializate user app models.
"""
from rest_framework import serializers

from .models import UserData

class UserDataSerializer(serializers.ModelSerializer):
    """User data serializer"""

    class Meta:
        model = UserData
        fields = '__all__'
