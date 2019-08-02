"""
Registration of models to web admin page
"""
from django.contrib import admin

from .models import Museum, Artifact, Author, Monument

admin.site.register(Museum)
admin.site.register(Artifact)
admin.site.register(Author)
admin.site.register(Monument)
