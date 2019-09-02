"""
# Api serializers
This module serializate the models to pass as json in the api.
"""
from rest_framework import serializers

from museum.models import Museum, MuseumStar, MuseumAddress
from artifact.models import Artifact, ArtifactTag
from monument.models import Monument

class MuseumSerializer(serializers.ModelSerializer):
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


class MuseumAddressSerializer(serializers.ModelSerializer):
    """Museum address serializer"""

    class Meta:
        model = MuseumAddress
        fields = '__all__'


class ArtifactSerializer(serializers.ModelSerializer):
    """Artifact serializer wich provide all data"""

    class Meta:
        model = Artifact
        fields = '__all__'


class ArtifactTagSerializer(serializers.ModelSerializer):
    """Artifact tag serializers with only the name"""

    class Meta:
        model = ArtifactTag
        fields = '__all__'


class ArtifactLigthSerializer(serializers.ModelSerializer):
    """A ligth version of ArtifactSerializer. Provide id and name field only"""

    class Meta:
        model = Artifact
        fields = ('id', 'name')
        read_only_fields = ('id', 'name')



class MonumentSerializer(serializers.ModelSerializer):
    """Monument serializer wich provide all data"""

    class Meta:
        model = Monument
        fields = '__all__'
