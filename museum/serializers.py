"""
# Api serializers
This module serializate the models to pass as json in the api.
"""
from rest_framework import serializers
from django_countries.serializers import CountryFieldMixin

from .models import Museum, MuseumStar, MuseumAddress, MuseumType

class MuseumSerializer(CountryFieldMixin, serializers.ModelSerializer):
    """Museum serializer wich provide all data"""

    class Meta:
        model = Museum
        fields = '__all__'


class MuseumLigthSerializer(serializers.ModelSerializer):
    """A ligth version of MuseumSerializer. Provide id and name field only"""

    class Meta:
        model = Museum
        fields = ('id', 'short_name')
        read_only_fields = ('id', 'short_name')


class MuseumStarSerializer(serializers.ModelSerializer):
    """Star of a museum serializer"""

    class Meta:
        model = MuseumStar
        fields = '__all__'


class MuseumTypeSerializer(serializers.ModelSerializer):
    """Type of museum serializer"""

    class Meta:
        model = MuseumType
        fields = '__all__'


class MuseumAddressSerializer(serializers.ModelSerializer):
    """Museum address serializer"""

    class Meta:
        model = MuseumAddress
        fields = '__all__'


