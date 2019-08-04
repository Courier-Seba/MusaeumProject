from django.urls import path, include

from .views import FrontPage

urlpatterns = [
    path('', FrontPage.as_view())
]
