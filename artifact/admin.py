from django.contrib import admin

from .models import Artifact, ArtifactTag, Collection
# Register your models here.
admin.site.register(Artifact)
admin.site.register(ArtifactTag)
admin.site.register(Collection)


