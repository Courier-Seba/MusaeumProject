"""
# Api serializers of artifact
This module serializate the models to pass as json in the api.
"""
from rest_framework import serializers
from .models import Artifact, ArtifactTag, Collection

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


class CollectionSerializer(serializers.ModelSerializer):
    """Collection serializers"""

    class Meta:
        model = Collection
        fields = "__all__"
