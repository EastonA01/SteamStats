import json
from urllib import request as r

from django.shortcuts import render
from rest_framework import status, viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Hub
from .serializers import HubSerializer

#  ======================= GLOBAL VARIABLES =======================
api_key = "7E41DC1C095AF9C5D643BF7DAA81C46D"
api_endpoint = "http://api.steampowered.com"

#  ======================= API FUNCTIONS =======================
@api_view(['GET'])
def user_friends(request, steam_id):
    if request.method == 'GET':
        if steam_id == "":
            return Response(status=status.HTTP_400_BAD_REQUEST)
        mergedData = []
        # mash of data between Set1 (User Friendslist) and Set2 (DisplayNames)
        # i.e data = data1 + data2
        url1 = f'/ISteamUser/GetFriendList/v0001/?key={api_key}&steamid={steam_id}&relationship=friend'
        data1 = network_request(url1)
        data2 = display_scraper(data1)

        # Call get_user_summary in conjunction with above function's NEW CSV and store data
        for i in data1['friendslist']['friends']:
            tmpEntry = {
                "steamid": i['steamid'],
                "friend_since": i['friend_since'],
            }
            tmpEntry2 = findUser(i['steamid'], data2["response"]["players"])
            tmpEntry.update(tmpEntry2)
            mergedData.append(tmpEntry)

        return Response(status=status.HTTP_200_OK, data=mergedData)

@api_view(['GET'])
def user_summary(request, steam_id):
    if request.method == 'GET':
        if steam_id == "":
            return Response(status=status.HTTP_400_BAD_REQUEST)
        url = f'/ISteamUser/GetPlayerSummaries/v0002/?key={api_key}&steamids={steam_id}'
        data = network_request(url)

        return Response(status=status.HTTP_200_OK, data=data)
    
@api_view(['GET'])
def user_games(request, steam_id):
    if request.method == 'GET':
        if steam_id == "":
            return Response(status=status.HTTP_400_BAD_REQUEST)
        
        url = f'/IPlayerService/GetOwnedGames/v0001/?key={api_key}&steamid={steam_id}&include_appinfo=true&include_played_free_games=true&format=json'
        data = network_request(url)

        return Response(status=status.HTTP_200_OK, data=data)
    
@api_view(['GET'])
def recently_played(request, steam_id):
    if request.method == 'GET':
        if steam_id == "":
            return Response(status=status.HTTP_400_BAD_REQUEST)
        url = f'/IPlayerService/GetRecentlyPlayedGames/v0001/?key={api_key}&steamid={steam_id}&format=json'
        data = network_request(url)

        return Response(status=status.HTTP_200_OK, data=data)    
    

#  ======================= HELPER FUNCTIONS =======================
def network_request(endpoint):
    url = api_endpoint+endpoint

    print(url)
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
    url = f'/ISteamUser/GetPlayerSummaries/v0002/?key={api_key}&steamids={ids}'
    return network_request(url)

def findUser(id, lst):
    return next((i for i in lst if i['steamid'] == id), None)

class HubView(viewsets.ModelViewSet):
    serializer_class = HubSerializer
    queryset = Hub.objects.all()


