"""
# Views
This module contains the views of the app.
"""
from rest_framework import (viewsets, filters)
from rest_framework import generics
from django_filters.rest_framework import DjangoFilterBackend
from .permissions import IsUserOwnerOrReadOnly
from rest_framework.permissions import AllowAny
from rest_framework_simplejwt.views import TokenObtainPairView

# Serializers
from .models import User, UserData, UserMessage
from .serializers import (
    UserDataSerializer,
    TokenObtainPairPatchedSerializer,
    UserMessageSerializer,
    UsernameSerializer,
    UserEmailSerializer,
)
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
    permission_classes = [IsUserOwnerOrReadOnly]
    lookup_field = 'user__id'

class UsernameView(generics.RetrieveAPIView):
    """
    ## Api retrive username by id
    """
    queryset = User.objects.all()
    serializer_class = UsernameSerializer
    permission_classes = [AllowAny]

class UserEmailView(generics.RetrieveAPIView):
    """
    ## Api retrive username by id
    """
    queryset = User.objects.all()
    serializer_class = UserEmailSerializer
    permission_classes = [AllowAny]

class UserMessageViewSet(viewsets.ModelViewSet):
    """
    ## Api view set of message
    """
    queryset = UserMessage.objects.all()
    serializer_class = UserMessageSerializer
    filter_backends = [DjangoFilterBackend,]
    filterset_fields = [
        'sender',
        'receiver'
    ]
    # TODO: permissions

class TokenObtainPairPatchedView(TokenObtainPairView):
    """
    Takes a set of user credentials and returns an access and refresh JSON web
    token pair to prove the authentication of those credentials.
    """
    serializer_class = TokenObtainPairPatchedSerializer
