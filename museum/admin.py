"""
Registration of models to web admin page
"""
from django.contrib import admin

from .models import Museum, Artifact

admin.site.register(Museum)
admin.site.register(Artifact)
