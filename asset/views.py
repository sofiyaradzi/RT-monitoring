from django.shortcuts import render

# Create your views here.


def index(request):
    context = {'text': '0'}
    return render(request, 'base.html', context)
