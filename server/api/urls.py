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
    MuseumTypeListView,
    MuseumVisitViewSet,
)
from applications.artifact.views import (
    ArtifactViewSet,
    ArtifactTagViewSet,
    ArtifactCollectionViewSet,
    ArtifactImageViewSet,
    ArtifactCommentViewSet,
)
from applications.news.views import AnnouncementListView
from users.views import (
    TokenObtainPairPatchedView,
    UserDataViewSet,
    UserMessageViewSet,
)

router = DefaultRouter()

router.register('museum', MuseumViewSet)
router.register('museum-visit', MuseumVisitViewSet)
router.register('artifact', ArtifactViewSet)
router.register('artifact-image', ArtifactImageViewSet)
router.register('artifact-comment', ArtifactCommentViewSet)
router.register('tag', ArtifactTagViewSet)
router.register('collection', ArtifactCollectionViewSet)
router.register('star', MuseumStarViewSet)
router.register('user-data', UserDataViewSet)
router.register('user-message', UserMessageViewSet)


# Urls 
urlpatterns = []

# Router
urlpatterns += router.urls
# Other routers
urlpatterns += [
    path('museum-type/', MuseumTypeListView.as_view(), name='museum-type'),
    path('news/', AnnouncementListView.as_view(), name='news')
]

# JWT auth
urlpatterns += [
    path('token/', TokenObtainPairPatchedView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
