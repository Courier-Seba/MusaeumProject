from django.urls import path, include
from django.conf.urls import url
from rest_framework.routers import DefaultRouter
from rest_framework_jwt.views import obtain_jwt_token


from . import views

router = DefaultRouter()

router.register('museum', views.MuseumViewSet, base_name='museum')
router.register('artifact', views.ArtifactViewSet, base_name='artifact')
router.register('tag', views.ArtifactTagViewSet, base_name='tag')
router.register('address', views.MuseumAddressViewSet, base_name='address')
router.register('monument', views.MonumentViewSet, base_name='monument')
router.register('star', views.MuseumStarViewSet, base_name='museum star')


# Urls 
urlpatterns = []
# Router
urlpatterns += router.urls
# Other routers
urlpatterns += [
    path('museum-type/', views.MuseumTypeListView.as_view())
]


# Third party apps
urlpatterns += [
    path('rest-auth/', include('rest_auth.urls')),
    path('rest-auth/registration/', include('rest_auth.registration.urls')),
    url(r'^api-token-auth/', obtain_jwt_token)
]
