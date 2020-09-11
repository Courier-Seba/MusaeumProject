from django import forms
from django.contrib.auth.forms import UserCreationForm, UserChangeForm

from .models import User


class BaseUserCreationForm(UserCreationForm):

    class Meta(UserCreationForm):
        model = User
        fields = ('username', 'email')


class BaseUserChangeForm(UserChangeForm):

    class Meta:
        model = User
        fields = ('username', 'email')
