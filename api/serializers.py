from rest_framework import serializers

from museum.models import Museum, Artifact, Author


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


class ArtifactSerializer(serializers.ModelSerializer):
    """Artifact serializer wich provide all data"""

    class Meta:
        model = Artifact
        fields = '__all__'


class ArtifactLigthSerializer(serializers.ModelSerializer):
    """A ligth version of ArtifactSerializer. Provide id and name field only"""

    class Meta:
        model = Artifact
        fields = ('id', 'name')
        read_only_fields = ('id', 'name')


class AuthorSerializer(serializers.ModelSerializer):
    """Author serializer wich provide all data"""

    class Meta:
        model = Author
        fields = '__all__'
