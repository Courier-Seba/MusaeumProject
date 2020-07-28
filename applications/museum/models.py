"""
# Museum models.py
This module contains models of the museum.
"""
from django.db import models
from musaeum_project.settings import AUTH_USER_MODEL as User
from django_countries.fields import CountryField

from musaeum_project.database_const import (
    SHORT_CHARFIEL_LENGTH,
    LONG_CHARFIEL_LENGTH,
    TEXT_FIELD_LENGTH,
)


class MuseumType(models.Model):
    """
    ### Museum type.
    * museum_type: defined choiced type
    """

    museum_type = models.CharField(
        max_length=SHORT_CHARFIEL_LENGTH,
    )

    def __str__(self):
        return self.museum_type

class MuseumLevel(models.Model):
    """
    ## Museum Level
    """
    number = models.IntegerField()


class Museum(models.Model):
    """
    ## Museum model.
    * administrator: User that register and control a museum
    * complete name: name of the museum
    * country: country where the museum belong
    * city: city where the museum belong
    * address: relate to adress model
    * logo picture: picture of the museum logo
    * front picture: picture of the entrance
    * administrator: User in charge of the museum
    """
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=SHORT_CHARFIEL_LENGTH)
    country = CountryField()
    city = models.CharField(max_length=SHORT_CHARFIEL_LENGTH)
    logo = models.ImageField(
        upload_to="museum/logo",
        null=True,
        blank=True
    )
    front_picture = models.ImageField(
        upload_to="museum/front",
        null=True,
        blank=True
    )
    level = models.ForeignKey(
        MuseumLevel,
        on_delete=models.SET_NULL,
        blank=True,
        null=True
    )
    museum_type = models.ForeignKey(MuseumType, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name


class MuseumStar(models.Model):
    """
    ## Museum star
    Votation unit
    * voter: User that gives a star
    * museum: museum related to the star
    * comment: an optional comment
    * status: status of the given star, if false, the votation wont be count
    """

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    museum = models.ForeignKey(Museum, on_delete=models.CASCADE)
    status = models.BooleanField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        complete_name = self.user.email + ' vote for ' + self.museum.name
        return complete_name

    class Meta:
        constraints = [
            models.UniqueConstraint(fields=['voter', 'museum'], name='vote')
        ]
        unique_together = ['voter', 'museum']



