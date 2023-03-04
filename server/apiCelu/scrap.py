import requests
from lxml import html
from bs4 import BeautifulSoup
from lxml import etree

# urls_fravega = [
#     'https://www.fravega.com/p/samsung-galaxy-a03s-64gb-negro-781603/',
#     'https://www.fravega.com/p/celular-motorola-edge-30-128gb-plata-opalo-781863/',
#     'https://www.fravega.com/p/celular-samsung-galaxy-a53-5g-128gb-negro-781818/',
#     'https://www.fravega.com/p/celular-tcl-30e-64gb-space-gray-781823/',
#     'https://www.fravega.com/p/celular-motorola-e20-32gb-gris-781809/',
#     'https://www.fravega.com/p/celular-motorola-g41-128gb-negro-onix-781721/',
#     'https://www.fravega.com/p/celular-motorola-edge-30-neo-very-peri-128-gb-violeta-781975/',
#     'https://www.fravega.com/p/celular-motorola-e40-64-gb-gris-781757/'
# ]

products_data = []

def scrap(u):
    res = requests.get(u)
    soup = BeautifulSoup(res.text, "html.parser")
    dom = etree.HTML(str(soup))
    nombres = dom.xpath('/html/body/div[5]/div/div/div[2]/h2/text()')
    # print(nombres)
    precios = dom.xpath('/html/body/div[5]/div/div/div[2]/div[1]/text()')
    # print(precios)
    descripcion = dom.xpath('/html/body/div[5]/div/div/div[2]/ul/li[1]/div/text()')
    marca = dom.xpath('/html/body/div[5]/div/div/div[2]/ul/li[2]/div/a/text()')
    for nom, pre, desc, marc in list(zip(nombres, precios, descripcion, marca)):
        products_data.append({'nombre': nom.lower(), 'precio': pre.replace(".", "").replace("$", ""), 'marca': marc.lower(), 'descripcion': desc})

    # print(celulares)