from django.shortcuts import render

# Create your views here.


def index(request):
    context = {'text': 'Heello world'}
    return render(request, 'base.html', context)
