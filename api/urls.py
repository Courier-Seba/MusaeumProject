from django.urls import path

from . import views

# Urls
urlpatterns = [
    path('museum/', views.ListMuseums.as_view(), name='Museums'),
    path('artifact/', views.ListArtifacts.as_view(), name="Artifacts")
]
