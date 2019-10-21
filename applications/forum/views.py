"""
# Views
This module contains the views of the app.
"""
from rest_framework import (viewsets, filters, permissions)
from rest_framework import generics
from django_filters.rest_framework import DjangoFilterBackend

# Models
from .models import Post, PostTag, Comment
# Serializers
from .serializers import PostSerializer, PostTagSerializer, CommentSerializer

# Create your views here.
class PostViewSet(viewsets.ModelViewSet):
    """
    ## Api view set of the posts ordered by lastest
    Search by title
    """
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    filter_backends = (
        DjangoFilterBackend,
        filters.OrderingFilter,
        filters.SearchFilter,
    )
    ordering_fields = ('created_at')
    ordering = ('-created_at')
    search_fields = ['title',]

class PostTagViewSet(viewsets.ModelViewSet):
    """
    ## Api view set of the posts tags
    Search by title
    """
    queryset = PostTag.objects.all()
    serializer_class = PostTagSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    filter_backends = (filters.SearchFilter,)
    search_fields = ['name',]

class CommentViewSet(viewsets.ModelViewSet):
    """
    ## Api view set of the comment for a post
    """
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    filter_backends = (DjangoFilterBackend,)
    filterset_fields = ['post']
