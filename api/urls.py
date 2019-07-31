from django.urls import path, include
from django.conf.urls import url
from rest_framework.routers import DefaultRouter
from rest_framework_jwt.views import obtain_jwt_token


from . import views

router = DefaultRouter()
router.register('museum', views.MuseumViewSets, base_name='museum')
router.register('artifact', views.ArtifactViewSet, base_name='artifact')
router.register('author', views.AuthorViewSet, base_name='author')
router.register('monument', views.MonumentViewSet, base_name='monument')

# Urls
urlpatterns = router.urls
urlpatterns += [
    path('rest-auth/', include('rest_auth.urls')),
    path('rest-auth/registration/', include('rest_auth.registration.urls')),
    url(r'^api-token-auth/', obtain_jwt_token)
]
