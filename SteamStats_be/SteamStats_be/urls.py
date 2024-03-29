"""SteamStats_be URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import include, path
from hub import views
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'hub', views.HubView, 'hub')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('api/friends/<str:steam_id>/', views.user_friends),
    path('api/user/<str:steam_id>/', views.user_summary),
    path('api/recentlyPlayed/<str:steam_id>/', views.recently_played),
    path('api/ownedGames/<str:steam_id>/', views.user_games),
    path('api/user_stats/<str:steam_id>/<str:game_id>/', views.user_stats)
]
