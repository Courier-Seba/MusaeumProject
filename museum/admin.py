"""
Registration of models to web admin page
"""
from django.contrib import admin

from .models import Museum

admin.site.register(Museum)
