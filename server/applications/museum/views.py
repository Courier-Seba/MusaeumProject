"""
# Views
This module contains the views of the app.
"""
from rest_framework import (viewsets, filters, permissions)
from rest_framework import generics
from django_filters.rest_framework import DjangoFilterBackend
# Serializers
from .permissions import IsAdministratorOrReadOnly

from .models import Museum, MuseumStar, MuseumType, MuseumVisit
from .serializers import (
    MuseumSerializer,
    MuseumStarSerializer,
    MuseumTypeSerializer,
    MuseumVisitSerializer
)

# Create your views here.
class MuseumViewSet(viewsets.ModelViewSet):
    """
    ## Api view set of the museum model
    Search for short name
    """
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    filterset_fields = [
        'id',
        'user__id',
        'country',
    ]
    search_fields = ['name']
    queryset = Museum.objects.all()
    serializer_class = MuseumSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly,
                          IsAdministratorOrReadOnly]
    lookup_field = 'user__id'


class MuseumStarViewSet(viewsets.ModelViewSet):
    """
    ## Api view set of the stars model
    """
    filter_backends = [DjangoFilterBackend,]
    filterset_fields = ['museum', 'user',]
    queryset = MuseumStar.objects.all()
    serializer_class = MuseumStarSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly,]


class MuseumTypeListView(generics.ListAPIView):
    """
    ## Api view list of the museum type (GET only)
    """
    queryset = MuseumType.objects.all()
    serializer_class = MuseumTypeSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly,]

class MuseumVisitViewSet(viewsets.ModelViewSet):
    """
    ## Api view set of the museum visits
    """
    queryset = MuseumVisit.objects.all()
    serializer_class = MuseumVisitSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly,]
