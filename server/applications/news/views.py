"""
# Views
This module contain the rest view of the annoucement
"""
from django.shortcuts import render
from rest_framework import generics
from rest_framework.permissions import AllowAny
from django_filters.rest_framework import DjangoFilterBackend

from .models import Announcement
from .serializers import AnnouncementSerilizer

# Create your views here.
class AnnouncementListView(generics.ListAPIView):
    """
    ## Api view of the annoucements
    """
    queryset = Announcement.objects.all()
    serializer_class = AnnouncementSerilizer
    permission_classes = [AllowAny,]
    filter_backends = [DjangoFilterBackend,]
    filterset_fields = [
        'lang',
        'date',
    ]
