"""
# Views
This module contains the views of the app.
"""
from rest_framework import (viewsets, filters, permissions)
from rest_framework import generics
# Serializers
from api.permissions import IsOwnerOrReadOnly, IsAdministratorOrReadOnly

from .models import Museum, MuseumStar, MuseumAddress, MuseumType
from .serializers import (
    MuseumSerializer,
    MuseumStarSerializer,
    MuseumAddressSerializer,
    MuseumTypeSerializer,
)

# Create your views here.
class MuseumViewSet(viewsets.ModelViewSet):
    """
    ## Api view set of the museum model
    Search for short name
    """
    search_fields = ['short_name', 'administrator__id']
    filter_backends = (filters.SearchFilter,)
    queryset = Museum.objects.all()
    serializer_class = MuseumSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly,
                          IsAdministratorOrReadOnly]


class MuseumStarViewSet(viewsets.ModelViewSet):
    """
    ## Api view set of the stars model
    """
    queryset = MuseumStar.objects.all()
    serializer_class = MuseumStarSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly,
                          IsAdministratorOrReadOnly]


class MuseumTypeListView(generics.ListAPIView):
    """
    ## Api view list of the museum type (GET only)
    """
    queryset = MuseumType.objects.all()
    serializer_class = MuseumTypeSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly,]


class MuseumAddressViewSet(viewsets.ModelViewSet):
    """
    ## Api view set of museum address
    """
    queryset = MuseumAddress.objects.all()
    serializer_class = MuseumAddressSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly,
                          IsAdministratorOrReadOnly]



