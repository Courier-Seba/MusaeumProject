"""
Registration of models to web admin page
"""
from django.contrib import admin

from .models import Museum, MuseumStar, MuseumAddress, MuseumType

admin.site.register(Museum)
admin.site.register(MuseumStar)
admin.site.register(MuseumAddress)
admin.site.register(MuseumType)

