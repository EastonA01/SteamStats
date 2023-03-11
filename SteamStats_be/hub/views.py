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
        mergedData = []
        # TODO Eventual mash of data between Set1 (User Friendslist) and Set2 (DisplayNames)
        # i.e data = data1 + data2
        data1 = get_friends(steam_id)

        data2 = display_scraper(data1)

        # TODO Call get_user_summary in conjunction with above function's NEW CSV and store data
        for i in data1['friendslist']['friends']:
            tmpEntry = {
                "steamid": i['steamid'],
                "friend_since": i['friend_since'],
            }
            # print(data2)
            tmpEntry2 = findUser(i['steamid'], data2["response"]["players"])
            tmpEntry.update(tmpEntry2)
            mergedData.append(tmpEntry)
        # Return set data beneath

        return Response(status=status.HTTP_200_OK, data=mergedData)


@api_view(['GET'])
def user_summary(request, steam_id):
    if request.method == 'GET':
        # if steam_id == "":
        #     return Response(status=status.HTTP_400_BAD_REQUEST)

        data = get_user_summary(steam_id)

        return Response(status=status.HTTP_200_OK, data=data)


def get_friends(steam_id):

    url = f'{api_endpoint}/ISteamUser/GetFriendList/v0001/?key={api_key}&steamid={steam_id}&relationship=friend'
    req = r.Request(url)
    req.add_header('User-Agent', "cheese")
    try:
        with r.urlopen(req) as response:
            content = response.read()

        data = json.loads(content)
    except:
        data = "No Data Found..."

    return data


def get_user_summary(steam_id):

    url = f'{api_endpoint}/ISteamUser/GetPlayerSummaries/v0002/?key={api_key}&steamids={steam_id}'
    req = r.Request(url)
    req.add_header('User-Agent', "cheese")
    try:
        with r.urlopen(req) as response:
            content = response.read()

        data = json.loads(content)
    except:
        data = "No Data Found..."

    return data


def display_scraper(response_data):
    # Loop through i in steam_id
    ids = ''
    for i in response_data['friendslist']['friends']:
        ids += i['steamid']+','
    return get_user_summary(ids)


def findUser(id, lst):
    return next((i for i in lst if i['steamid'] == id), None)


class HubView(viewsets.ModelViewSet):
    serializer_class = HubSerializer
    queryset = Hub.objects.all()
