from rest_framework import serializers

from museum.models import Museum, Artifact, Author


class MuseumSerializer(serializers.ModelSerializer):

    class Meta:
        model = Museum
        fields = '__all__'


class ArtifactSerializer(serializers.ModelSerializer):

    class Meta:
        model = Artifact
        fields = '__all__'

class AuthorSerializer(serializers.ModelSerializer):

    class Meta:
        model = Author
        fields = '__all__'