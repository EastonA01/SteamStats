from django.shortcuts import render
from rest_framework import viewsets
from .serializers import HubSerializer
from .models import Hub
import json
from urllib import request as r

from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

api_key = "7E41DC1C095AF9C5D643BF7DAA81C46D"

api_endpoint = "http://api.steampowered.com"


# Create your views here.

@api_view(['GET'])
def user_friends(request, steam_id):
    if request.method == 'GET':
        # if steam_id == "":
        #     return Response(status=status.HTTP_400_BAD_REQUEST)

    
        url = f'{api_endpoint}/ISteamUser/GetFriendList/v0001/?key={api_key}&steamid={steam_id}&relationship=friend'
        req = r.Request(url)
        req.add_header('User-Agent',"cheese")
        try:
            with r.urlopen(req) as response:
                content = response.read()

            data = json.loads(content)
        except:
            data = "No Data Found..."

        # data={"you_want":steam_id}
        return Response(status=status.HTTP_200_OK, data=data)
    
@api_view(['GET'])
def user_summary(request, steam_id):
    if request.method == 'GET':
        # if steam_id == "":
        #     return Response(status=status.HTTP_400_BAD_REQUEST)

    
        url = f'{api_endpoint}/ISteamUser/GetPlayerSummaries/v0002/?key={api_key}&steamids={steam_id}'
        req = r.Request(url)
        req.add_header('User-Agent',"cheese")
        try:
            with r.urlopen(req) as response:
                content = response.read()

            data = json.loads(content)
        except:
            data = "No Data Found..."

        # data={"you_want":steam_id}
        return Response(status=status.HTTP_200_OK, data=data)


class HubView(viewsets.ModelViewSet):
    serializer_class = HubSerializer
    queryset = Hub.objects.all()