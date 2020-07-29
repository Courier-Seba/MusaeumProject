"""
# Api urls
This module contains all the urls endpoints of the rest views of all apps
"""
from django.urls import path, include
from django.conf.urls import url
from rest_framework.routers import DefaultRouter
from rest_framework import permissions
from rest_framework_simplejwt.views import TokenRefreshView


# Apps views
from applications.museum.views import (
    MuseumViewSet,
    MuseumStarViewSet,
    MuseumTypeListView
)
from applications.artifact.views import (
    ArtifactViewSet,
    ArtifactTagViewSet,
    ArtifactCollectionViewSet
)
from applications.news.views import AnnouncementListView
from users.views import (
    TokenObtainPairPatchedView,
    UserDataViewSet
)

router = DefaultRouter()

router.register('museum', MuseumViewSet)
router.register('artifact', ArtifactViewSet)
router.register('tag', ArtifactTagViewSet)
router.register('collection', ArtifactCollectionViewSet)
router.register('star', MuseumStarViewSet)
router.register('user-data', UserDataViewSet)


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
    path('token/', TokenObtainPairPatchedView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
