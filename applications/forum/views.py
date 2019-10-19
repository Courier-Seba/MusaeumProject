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
    ## Api view set of the posts
    Search by title
    """
    filter_backends = (filters.SearchFilter,)
    search_fields = ['title',]
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

class PostTagViewSet(viewsets.ModelViewSet):
    """
    ## Api view set of the posts
    Search by title
    """
    filter_backends = (filters.SearchFilter,)
    search_fields = ['name',]
    queryset = PostTag.objects.all()
    serializer_class = PostTagSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

class CommentViewSet(viewsets.ModelViewSet):
    """
    ## Api view set of the comment for a post
    """
    filter_backends = (DjangoFilterBackend,)
    filterset_fields = ['post']
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
