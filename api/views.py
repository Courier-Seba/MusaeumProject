"""
Views of the serializations.
"""
from rest_framework import viewsets
from rest_framework import permissions
# Serializers
from .permissions import IsOwnerOrReadOnly, IsAdministratorOrReadOnly
from . import serializers

# Models to show
from museum.models import Museum, MuseumStar
from artifact.models import Artifact, Author
from monument.models import Monument

# Create your views here.


class MuseumViewSets(viewsets.ModelViewSet):
    queryset = Museum.objects.all()
    serializer_class = serializers.MuseumSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly,
                          IsAdministratorOrReadOnly]

class MuseumStarViewSets(viewsets.ModelViewSet):
    queryset = MuseumStar.objects.all()
    serializer_class = serializers.MuseumStarSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly,
                          IsAdministratorOrReadOnly]

class ArtifactViewSet(viewsets.ModelViewSet):
    queryset = Artifact.objects.all()
    serializer_class = serializers.ArtifactSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly,
                          IsOwnerOrReadOnly]

class MonumentViewSet(viewsets.ModelViewSet):
    queryset = Monument.objects.all()
    serializer_class = serializers.MonumentSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly,
                          IsOwnerOrReadOnly]

class AuthorViewSet(viewsets.ModelViewSet):
    queryset = Author.objects.all()
    serializer_class = serializers.AuthorSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
