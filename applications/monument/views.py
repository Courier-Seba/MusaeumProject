"""
# Views
This module contains the views of the app.
"""

# Serializers
from rest_framework import (viewsets, filters, permissions)
from rest_framework import generics

from .models import Monument
from .serializers import MonumentSerializer


# Create your views here.
class MonumentViewSet(viewsets.ModelViewSet):
    """
    ## Api view set of the artifact model
    Search for name
    """
    search_fields = ['name', ]
    filter_backends = (filters.SearchFilter,)
    queryset = Monument.objects.all()
    serializer_class = MonumentSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
