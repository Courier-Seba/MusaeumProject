"""
# Api urls
This module contains all the urls endpoints of the rest views of all apps
"""
from django.urls import path, include
from django.conf.urls import url
from rest_framework.routers import DefaultRouter
from rest_framework_jwt.views import obtain_jwt_token

# Apps views
from museum.views import (
    MuseumViewSet,
    MuseumAddressViewSet,
    MuseumStarViewSet,
    MuseumTypeListView
)
from artifact.views import (
    ArtifactViewSet,
    ArtifactTagViewSet,
    CollectionViewSet
)
from monument.views import MonumentViewSet
from users.views import UserDataViewSet

router = DefaultRouter()

router.register('museum', MuseumViewSet, base_name='museum')
router.register('artifact', ArtifactViewSet, base_name='artifact')
router.register('tag', ArtifactTagViewSet, base_name='tag')
router.register('collection', CollectionViewSet, base_name='collection')
router.register('address', MuseumAddressViewSet, base_name='address')
router.register('monument', MonumentViewSet, base_name='monument')
router.register('star', MuseumStarViewSet, base_name='museum star')
router.register('user_data', UserDataViewSet, base_name='user data')


# Urls 
urlpatterns = []
# Router
urlpatterns += router.urls
# Other routers
urlpatterns += [
    path('museum-type/', MuseumTypeListView.as_view()),
]


# Third party apps
urlpatterns += [
    path('rest-auth/', include('rest_auth.urls')),
    path('rest-auth/registration/', include('rest_auth.registration.urls')),
    url(r'^api-token-auth/', obtain_jwt_token)
]
