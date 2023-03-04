from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import get_object_or_404, render
from django.views.decorators.csrf import csrf_exempt
from django.http import FileResponse, Http404, JsonResponse
from .scrap import products_data, scrap
from .models import Products
import json
import time

# Create your views here.
@csrf_exempt
def index(request):
    return JsonResponse({'mensaje': 'Hola mundo!, bienvenidos a libreria tecnica'})

# @csrf_exempt
# def all_cell_phones(request):
#     cell_phones = Cell_phones.objects.all().values()
#     # print(cell_phones)
#     return JsonResponse([dict(row) for row in cell_phones.values()], safe=False)
#     # return JsonResponse({'mensaje': 'Hola mundo!, bienvenidos a api celu'})

# @csrf_exempt
# def new_cell_phone(request):
#     if request.method == 'POST':
#         # body_unidecode = request.body.decode('utf-8')
#         cell_phone = json.loads(request.body)
#         # print(cell_phone)

#         name = cell_phone['name']
#         price = cell_phone['price']
#         description = cell_phone['description']
#         url_web = cell_phone['url_web']
#         url_image = cell_phone['url_image']

#         new_cellphone = Cell_phones(name=name, price=price, description=description, url_web=url_web, url_image=url_image)
#         new_cellphone.save()
        
#     return JsonResponse({'mensaje': 'nuevo celular insertado'})

# @csrf_exempt
# def new_brand(request):
#     if request.method == 'POST':
#         brand = json.loads(request.body)
#         print(brand)

#         name = brand['name']

#         neww_brand = Brands(name=name)
#         neww_brand.save()

#     return JsonResponse({'mensaje': 'nueva marca insertada'})

@csrf_exempt
def all_products(request):
    products = Products.objects.all().values()
    # print(cell_phones)
    return JsonResponse([dict(row) for row in products.values()], safe=False)
    # return JsonResponse({'mensaje': 'Hola mundo!, bienvenidos a api celu'})

@csrf_exempt
def new_product(request):
    brand_id = None
    if request.method == 'POST':
        # body_unidecode = request.body.decode('utf-8')
        product = json.loads(request.body)
        url_web = product['url_web']
        print(url_web)
        scrap(url_web)

        print(products_data)

        # print(products_data[0]['marca'])
        brand = products_data[0]['marca'] or None
        name = products_data[0]['nombre'] or None
        price = products_data[0]['precio'] or None
        description = products_data[0]['descripcion'] or None

        # Products.objects.raw('INSERT INTO public."apiCelu_brands" (name) VALUES (%s) ON CONFLICT (brand) DO NOTHING', (brand))
        # print('marca insertadaa', brand)
        
        new_product = Products(name=name, price=price[:-3], description=description, url_web=url_web, brand_name=brand)

        time.sleep(5)
        new_product.save()
        print("new product insert correctly")
        
    return JsonResponse({'mensaje': 'nuevo producto insertado'})
