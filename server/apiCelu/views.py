from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import get_object_or_404, render
from django.views.decorators.csrf import csrf_exempt
from django.http import FileResponse, Http404, JsonResponse
from .scrap import celulares
from .models import Cell_phones, Brands
import json

# Create your views here.
@csrf_exempt
def index(request):
    return JsonResponse({'mensaje': 'Hola mundo!, bienvenidos a api celu'})

@csrf_exempt
def all_cell_phones(request):
    cell_phones = Cell_phones.objects.all().values()
    print(cell_phones)
    return JsonResponse([dict(row) for row in cell_phones.values()], safe=False)
    # return JsonResponse({'mensaje': 'Hola mundo!, bienvenidos a api celu'})

@csrf_exempt
def new_cell_phone(request):
    if request.method == 'POST':
        # body_unidecode = request.body.decode('utf-8')
        cell_phone = json.loads(request.body)
        print(cell_phone)

        name = cell_phone['name']
        price = cell_phone['price']
        description = cell_phone['description']
        url_web = cell_phone['url_web']
        url_image = cell_phone['url_image']

        new_cellphone = Cell_phones(name=name, price=price, description=description, url_web=url_web, url_image=url_image)
        new_cellphone.save()
        
    return JsonResponse({'mensaje': 'nuevo celular insertado'})

@csrf_exempt
def new_brand(request):
    if request.method == 'POST':
        brand = json.loads(request.body)
        print(brand)

        name = brand['name']

        neww_brand = Brands(name=name)
        neww_brand.save()

    return JsonResponse({'mensaje': 'nueva marca insertada'})