"""
# Api urls
This module contains all the urls endpoints of the rest views of all apps
"""
from django.urls import path, include
from django.conf.urls import url
from rest_framework.routers import DefaultRouter
from rest_framework import permissions
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)


# Apps views
from applications.museum.views import (
    MuseumViewSet,
    MuseumAddressViewSet,
    MuseumStarViewSet,
    MuseumTypeListView
)
from applications.artifact.views import (
    ArtifactViewSet,
    ArtifactTagViewSet,
    CollectionViewSet
)
from applications.monument.views import MonumentViewSet
from applications.news.views import AnnouncementListView
from applications.forum.views import ( 
    PostViewSet,
    PostTagViewSet,
    CommentViewSet
)

from users.views import UserDataViewSet

router = DefaultRouter()

router.register('museum', MuseumViewSet)
router.register('artifact', ArtifactViewSet)
router.register('tag', ArtifactTagViewSet)
router.register('collection', CollectionViewSet)
router.register('address', MuseumAddressViewSet)
router.register('monument', MonumentViewSet)
router.register('star', MuseumStarViewSet)
router.register('user-data', UserDataViewSet)
router.register('forum/post', PostViewSet)
router.register('forum/comment', CommentViewSet)
router.register('forum/tag', PostTagViewSet)


# Urls 
urlpatterns = []

# Router
urlpatterns += router.urls
# Other routers
urlpatterns += [
    path('museum-type/', MuseumTypeListView.as_view()),
    path('news/', AnnouncementListView.as_view())
]

# JWT auth
urlpatterns += [
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
