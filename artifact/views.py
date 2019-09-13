"""
# Views
This module contains the views of the app.
"""

from rest_framework import (viewsets, filters, permissions)
from rest_framework import generics
from django_filters.rest_framework import DjangoFilterBackend

# Serializers
from api.permissions import IsOwnerOrReadOnly, IsAdministratorOrReadOnly
from artifact.models import Artifact, ArtifactTag, Collection

from .serializers import (
    ArtifactSerializer,
    ArtifactTagSerializer,
    CollectionSerializer
)

# Create your views here.
class ArtifactViewSet(viewsets.ModelViewSet):
    """
    ## Api view set of the artifact model
    Search for name
    """
    filter_backends = [filters.SearchFilter, DjangoFilterBackend]
    search_fields = ['name',]
    filterset_fields = ['collection',]
    queryset = Artifact.objects.all()
    serializer_class = ArtifactSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly,
                          IsOwnerOrReadOnly]


class ArtifactTagViewSet(viewsets.ModelViewSet):
    """
    ## Api view set of the tags for artifacts
    """
    queryset = ArtifactTag.objects.all()
    serializer_class = ArtifactTagSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly,]


class CollectionViewSet(viewsets.ModelViewSet):
    """
    ## Api view set of collections
    """
    filter_backends = [DjangoFilterBackend,]
    filterset_fields = ['museum',]
    queryset = Collection.objects.all()
    serializer_class = CollectionSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly,
                          IsOwnerOrReadOnly]

