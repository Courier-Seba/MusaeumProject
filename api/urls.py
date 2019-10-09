"""
# Api urls
This module contains all the urls endpoints of the rest views of all apps
"""
from django.urls import path, include
from django.conf.urls import url
from rest_framework.routers import DefaultRouter
from rest_framework_jwt.views import obtain_jwt_token, refresh_jwt_token
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

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
    path('news/', AnnouncementListView.as_view())
]

# Third party apps
schema_view = get_schema_view(
   openapi.Info(
      title="Snippets API",
      default_version='v1',
      description="Test description",
      terms_of_service="https://www.google.com/policies/terms/",
      contact=openapi.Contact(email="contact@snippets.local"),
      license=openapi.License(name="BSD License"),
   ),
   public=True,
   permission_classes=(permissions.AllowAny,),
)

urlpatterns += [
    path('rest-auth/', include('rest_auth.urls')),
    path('rest-auth/registration/', include('rest_auth.registration.urls')),
    url(r'^api-token-auth/', obtain_jwt_token),
    url(r'^api-token-refresh/', refresh_jwt_token),
    url(
        r'^swagger(?P<format>\.json|\.yaml)$',
        schema_view.without_ui(cache_timeout=0),
        name='schema-json'
    ),
    url(
        r'^swagger/$',
        schema_view.with_ui('swagger', cache_timeout=0), 
        name='schema-swagger-ui'
    ),
    url(
        r'^redoc/$',
        schema_view.with_ui('redoc', cache_timeout=0),
        name='schema-redoc'
    ),
]
