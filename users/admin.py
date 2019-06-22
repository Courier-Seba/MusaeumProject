from django.contrib import admin
from django.contrib.auth import get_user_model
from django.contrib.auth.admin import UserAdmin

from .models import BaseUser
from .forms import BaseUserCreationForm, BaseUserChangeForm


class AdminUser(UserAdmin):
    add_form = BaseUserCreationForm
    form = BaseUserChangeForm
    model = BaseUser
    list_display = ['email', 'username']


admin.site.register(BaseUser, AdminUser)
