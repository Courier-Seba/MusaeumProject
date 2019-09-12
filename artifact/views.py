"""
# Views
This module contains the views of the app.
"""

# Create your views here.
from rest_framework import (viewsets, filters, permissions)
from rest_framework import generics

# Serializers
from api.permissions import IsOwnerOrReadOnly, IsAdministratorOrReadOnly
from artifact.models import Artifact, ArtifactTag, Collection

from .serializers import (
    ArtifactSerializer,
    ArtifactTagSerializer,
    CollectionSerializer
)

class ArtifactViewSet(viewsets.ModelViewSet):
    """
    ## Api view set of the artifact model
    Search for name
    """
    search_fields = ['name', 'museum']
    filter_backends = (filters.SearchFilter,)
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
    queryset = Collection.objects.all()
    serializer_class = CollectionSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly,
                          IsOwnerOrReadOnly]

