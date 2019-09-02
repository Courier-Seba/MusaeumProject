"""
# Api views
This module contains the view that the api will give in response to its urls.
"""

from rest_framework import (viewsets, filters, permissions)
from rest_framework import generics
# Serializers
from .permissions import IsOwnerOrReadOnly, IsAdministratorOrReadOnly
from . import serializers

# Models to show
from museum.models import Museum, MuseumStar, MuseumAddress
from artifact.models import Artifact, ArtifactTag
from monument.models import Monument

# Create your views here.


class MuseumViewSet(viewsets.ModelViewSet):
    """
    ## Api view set of the museum model
    Search for short name
    """
    search_fields = ['short_name', 'administrator__id']
    filter_backends = (filters.SearchFilter,)
    queryset = Museum.objects.all()
    serializer_class = serializers.MuseumSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly,
                          IsAdministratorOrReadOnly]


class MuseumStarViewSet(viewsets.ModelViewSet):
    """
    ## Api view set of the stars model
    """
    queryset = MuseumStar.objects.all()
    serializer_class = serializers.MuseumStarSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly,
                          IsAdministratorOrReadOnly]


class MuseumAddressViewSet(viewsets.ModelViewSet):
    """
    ## Api view set of museum address
    """
    queryset = MuseumAddress.objects.all()
    serializer_class = serializers.MuseumAddressSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly,
                          IsAdministratorOrReadOnly]


class ArtifactViewSet(viewsets.ModelViewSet):
    """
    ## Api view set of the artifact model
    Search for name
    """
    search_fields = ['name', ]
    filter_backends = (filters.SearchFilter,)
    queryset = Artifact.objects.all()
    serializer_class = serializers.ArtifactSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly,
                          IsOwnerOrReadOnly]


class ArtifactTagViewSet(viewsets.ModelViewSet):
    """
    ## Api view set of the tags for artifacts
    """
    queryset = ArtifactTag.objects.all()
    serializer_class = serializers.ArtifactTagSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly,]


class MonumentViewSet(viewsets.ModelViewSet):
    """
    ## Api view set of the artifact model
    Search for name
    """
    search_fields = ['name', ]
    filter_backends = (filters.SearchFilter,)
    queryset = Monument.objects.all()
    serializer_class = serializers.MonumentSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly,
                          IsOwnerOrReadOnly]
