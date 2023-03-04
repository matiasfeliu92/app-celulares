from django.urls import path

from django.conf import settings
from django.conf.urls.static import static

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    # path('cellphones', views.all_cell_phones, name='all_cell_phones'),
    path('products', views.all_products, name='all_products'),
    # path('new_cellphone', views.new_cell_phone, name='new_cell_phone'),
    path('new_product', views.new_product, name='new_product'),
    # path('new_brand', views.new_brand, name='new_brand'),
]