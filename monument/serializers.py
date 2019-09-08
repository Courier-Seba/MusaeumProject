
"""
# Api serializers
This module serializate the models to pass as json in the api.
"""
from rest_framework import serializers

from .models import Monument

class MonumentSerializer(serializers.ModelSerializer):
    """Monument serializer wich provide all data"""

    class Meta:
        model = Monument
        fields = '__all__'
