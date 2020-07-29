"""
# Views
This module contains the views of the app.
"""

from rest_framework import (viewsets, filters, permissions)
from rest_framework import generics
from django_filters.rest_framework import DjangoFilterBackend

# Serializers
from .permissions import IsOwnerOrReadOnly
from .models import Artifact, ArtifactTag, ArtifactCollection

from .serializers import (
    ArtifactSerializer,
    ArtifactTagSerializer,
    ArtifactCollectionSerializer
)

# Create your views here.
class ArtifactViewSet(viewsets.ModelViewSet):
    """
    ## Api view set of the artifact model
    Search for name
    """
    filter_backends = [filters.SearchFilter, DjangoFilterBackend]
    search_fields = ['name',]
    filterset_fields = ['collection', 'museum__id']
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


class ArtifactCollectionViewSet(viewsets.ModelViewSet):
    """
    ## Api view set of collections
    """
    filter_backends = [DjangoFilterBackend,]
    filterset_fields = ['museum',]
    queryset = ArtifactCollection.objects.all()
    serializer_class = ArtifactCollectionSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly,
                          IsOwnerOrReadOnly]

