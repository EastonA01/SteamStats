from django.contrib import admin
from .models import Hub

class HubAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', 'completed')

# Register your models here.

admin.site.register(Hub, HubAdmin)