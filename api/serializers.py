from rest_framework import serializers

from museum.models import Museum, Artifact


class MuseumSerializer(serializers.ModelSerializer):

    class Meta:
        model = Museum
        fields = '__all__'


class ArtifactSerializer(serializers.ModelSerializer):

    class Meta:
        model = Artifact
        fields = '__all__'
