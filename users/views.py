"""
# Views
This module contains the views of the app.
"""
from rest_framework import (viewsets, filters, permissions)
from rest_framework import generics
from django_filters.rest_framework import DjangoFilterBackend
# Serializers

from .models import User, UserData
from .serializers import UserDataSerializer
# Create your views here.

class UserDataViewSet(viewsets.ModelViewSet):
    """
    ## Api view of user data
    """
    filter_backends = [DjangoFilterBackend,]
    filterset_fields = [
        'user'
    ]
    queryset = UserData.objects.all()
    serializer_class = UserDataSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly,]
