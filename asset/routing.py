from django.urls import path
from .consumers import GraphConsumer

ws_urlspatterns = [
    path('ws/asset', GraphConsumer.as_asgi()),
]
