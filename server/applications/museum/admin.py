"""
Registration of models to web admin page
"""
from django.contrib import admin

from .models import Museum, MuseumStar, MuseumType, MuseumLevel

admin.site.register(Museum)
admin.site.register(MuseumStar)
admin.site.register(MuseumType)
admin.site.register(MuseumLevel)

