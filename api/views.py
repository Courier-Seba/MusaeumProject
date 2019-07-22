"""
Views of the serializations.
"""
from rest_framework import viewsets
# Serializers
from . import serializers

# Models to show
from museum.models import Museum, Artifact

# Create your views here.


class MuseumViewSets(viewsets.ModelViewSet):
    queryset = Museum.objects.all()
    serializer_class = serializers.MuseumSerializer


class ArtifactViewSet(viewsets.ModelViewSet):
    queryset = Artifact.objects.all()
    serializer_class = serializers.ArtifactSerializer
