"""
# Api serializers of artifact
This module serializate the models to pass as json in the api.
"""
from rest_framework import serializers
from .models import (
    Artifact,
    ArtifactTag,
    ArtifactCollection,
    ArtifactImage,
    ArtifactComment
)

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


class ArtifactCollectionSerializer(serializers.ModelSerializer):
    """Collection serializers"""

    class Meta:
        model = ArtifactCollection
        fields = "__all__"

class ArtifactImageSerializer(serializers.ModelSerializer):
    """ Image serializer """


    class Meta:
        model = ArtifactImage
        fields = "__all__"

class ArtifactCommentSerializer(serializers.ModelSerializer):
    """ Coment serializer """

    class Meta:
        model = ArtifactComment
        fields = "__all__"
