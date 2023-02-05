from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import get_object_or_404, render
from django.views.decorators.csrf import csrf_exempt
from django.http import FileResponse, Http404, JsonResponse
from .scrap import celulares
from .models import Celulares

# Create your views here.
@csrf_exempt
def index(request):
    return JsonResponse({'mensaje': 'Hola mundo!, bienvenidos a api celu'})

@csrf_exempt
def celulares_todos(request):
    celulares = Celulares.objects.all().values()
    print(celulares)
    return JsonResponse([dict(row) for row in celulares.values()], safe=False)
    # return JsonResponse({'mensaje': 'Hola mundo!, bienvenidos a api celu'})

@csrf_exempt
def nuevo_celular(request):
    for celu in celulares:
        print(celu.nombre)
    return JsonResponse({'mensaje': 'Hola mundo!, bienvenidos a api celu'})