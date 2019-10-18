"""
# Api Serializer
This module serializate the forum models for json output
"""
from rest_framework import serializers

from .models import PostTag, Post, Comment

class PostSerializer(serializers.ModelSerializer):
    """ Post data serializer """

    class Meta:
        model = Post
        fields = "__all__"

class PostTagSerializer(serializers.ModelSerializer):
    """ Post tag serializer """

    class Meta:
        model = PostTag
        fields = "__all__"

class CommentSerializer(serializers.ModelSerializer):
    """ Comment serializer """

    class Meta:
        model = Comment
        fields = "__all__"
