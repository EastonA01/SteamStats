from django.shortcuts import render
from rest_framework import viewsets
from .serializers import HubSerializer
from .models import Hub

# Create your views here.

class HubView(viewsets.ModelViewSet):
    serializer_class = HubSerializer
    queryset = Hub.objects.all()