"""
# Museum models.py
This module contains models of the museum.
"""
from django.db import models
from musaeum_project.settings import AUTH_USER_MODEL as user
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

    GENERAL = "GN"
    ARCHAEOLOGY = "AC"
    ART = "AR"
    ENCYCLOPEDIC = "EN"
    HISTORIC_HOUSE = "HH"
    HISTORY = "HY"
    MARITIME = "MR"
    MILITARY = "MI"
    NATURAL = "NA"
    SCIENCE = "SC"
    TECHNOLOGY = "TH"
    TYPE_CHOICES = [
        (GENERAL, "General"),
        (ARCHAEOLOGY, "Archaeology"),
        (ART, "Art"),
        (ENCYCLOPEDIC, "Encyclopedic"),
        (HISTORIC_HOUSE, "Historic house"),
        (HISTORY, "History"),
        (MARITIME, "Maritime"),
        (MILITARY, "Military"),
        (NATURAL, "Natural"),
        (SCIENCE, "Science"),
        (TECHNOLOGY, "Technology"),
    ]
    museum_type = models.CharField(
        max_length=2,
        choices=TYPE_CHOICES,
        default=GENERAL
    )

    def __str__(self):
        return self.museum_type


class Museum(models.Model):
    """
    ## Museum model.
    * administrator: user that register and control a museum
    * complete name: name of the museum
    * country: country where the museum belong
    * city: city where the museum belong
    * address: relate to adress model
    * logo picture: picture of the museum logo
    * front picture: picture of the entrance
    * administrator: user in charge of the museum
    """
    short_name = models.CharField(max_length=SHORT_CHARFIEL_LENGTH)
    complete_name = models.CharField(max_length=LONG_CHARFIEL_LENGTH)
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
    virtual_map = models.ImageField(
        upload_to="museum/front",
        null=True,
        blank=True
    )
    administrator = models.OneToOneField(user, on_delete=models.CASCADE)

    MEMORIES = "MM"
    COLLECTION ="CL"
    MUSEUM = "MU"
    WORLD_HERITAGE = "WH"
    MUSEUM_LEVEL_CHOICES = [
        (MEMORIES, "Memories"),
        (COLLECTION, "Collecction"),
        (MUSEUM, "Museum"),
        (WORLD_HERITAGE, "World Heritage"),
    ]
    museum_level = models.CharField(
        max_length=2,
        choices=MUSEUM_LEVEL_CHOICES,
        default=MEMORIES
    )
    museum_type = models.ForeignKey(MuseumType, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.short_name


class MuseumAddress(models.Model):
    """
    ### Adress of a museum
    * street: main street where the museum is
    * number: street number of the main street
    * second street: perpendicular street
    """

    street = models.CharField(max_length=LONG_CHARFIEL_LENGTH)
    number = models.IntegerField()
    second_street = models.CharField(max_length=LONG_CHARFIEL_LENGTH)
    museum = models.OneToOneField(Museum, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.museum.complete_name


class MuseumStar(models.Model):
    """
    ### Museum star
    Votation unit
    * voter: user that gives a star
    * museum: museum related to the star
    * comment: an optional comment
    * status: status of the given star, if false, the votation wont be count
    """

    voter = models.ForeignKey(user, on_delete=models.CASCADE)
    museum = models.ForeignKey(Museum, on_delete=models.CASCADE)
    comment = models.TextField(max_length=TEXT_FIELD_LENGTH)
    status = models.BooleanField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        complete_name = self.voter.username + ' vote for ' + self.museum.short_name
        return complete_name
