from rest_framework import serializers
from .models import Hub

class HubSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hub
        fields = ('id', 'title', 'description', 'completed')