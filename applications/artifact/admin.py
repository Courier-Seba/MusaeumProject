from django.contrib import admin

from .models import (
    Artifact,
    ArtifactTag,
    ArtifactCollection,
    ArtifactImage,
    ArtifactComment
)
# Register your models here.
admin.site.register(Artifact)
admin.site.register(ArtifactTag)
admin.site.register(ArtifactCollection)
admin.site.register(ArtifactComment)
admin.site.register(ArtifactImage)


