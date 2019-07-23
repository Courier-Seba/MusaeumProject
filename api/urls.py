from django.urls import path
from rest_framework.routers import DefaultRouter

from . import views

router = DefaultRouter()
router.register('museum', views.MuseumViewSets, base_name='museum')
router.register('artifact', views.ArtifactViewSet, base_name='artifact')
router.register('author', views.AuthorViewSet, base_name='author')

# Urls
urlpatterns = router.urls
