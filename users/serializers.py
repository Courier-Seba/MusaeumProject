"""
# User serializer
This module serializate user app models.
"""
from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

from .models import UserData

class UserDataSerializer(serializers.ModelSerializer):
    """User data serializer"""

    class Meta:
        model = UserData
        fields = '__all__'

class TokenObtainPairPatchedSerializer(TokenObtainPairSerializer):
     def validate(self, attrs):
        data = super(TokenObtainPairPatchedSerializer, self).validate(attrs)
        data.update({'user': self.user.id})
        return data
