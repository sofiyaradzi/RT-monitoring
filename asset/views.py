from django.shortcuts import render
import requests
import json
from django.http import JsonResponse
# Create your views here.


def index(request):
    context = {'text': '0'}
    return render(request, 'base.html', context)


def api(request):
    # response = requests.get('http://127.0.0.1:3000/node').json()
    # response = requests.get(
    #     'https://api.github.com/users/sofiyaradzi', auth=('user', 'pass')).json()

    data = [{"devaddr": "test", "model": "dummy"}]

    response = requests.get(
        'http://www.randomnumberapi.com/api/v1.0/random?min=100&max=1000&count=10').json()

    context = {'response': response}
    return render(request, 'api.html', context)
    # return JsonResponse(response, safe=False, json_dumps_params={'ensure_ascii': False})
