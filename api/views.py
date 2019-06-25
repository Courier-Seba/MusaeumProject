"""
Views of the serializations.
"""
from rest_framework import generics
# Serializers
from . import serializers

# Models to show
from museum.models import Museum, Artifact

# Create your views here.


class ListMuseums(generics.ListAPIView):
    queryset = Museum.objects.all()
    serializer_class = serializers.MuseumSerializer


class ListArtifacts(generics.ListAPIView):
    queryset = Artifact.objects.all()
    serializer_class = serializers.MuseumSerializer
