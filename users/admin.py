from django.contrib import admin
from django.contrib.auth import get_user_model
from django.contrib.auth.admin import UserAdmin

from .models import User
from .forms import BaseUserCreationForm, BaseUserChangeForm


class AdminUser(UserAdmin):
    add_form = BaseUserCreationForm
    form = BaseUserChangeForm
    model = User
    list_display = ['email', 'username']


admin.site.register(User, AdminUser)
