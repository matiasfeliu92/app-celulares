from django.db import models

# Create your models here.
from django.db import models, migrations

# Create your models here.
class Brands(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100, unique=True)
    
class Cell_phones(models.Model):
    id = models.AutoField(primary_key=True)
    # id = models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='id')
    name = models.CharField(max_length=100, unique=True)
    price = models.IntegerField()
    brand_id = models.ForeignKey(Brands, on_delete=models.RESTRICT, null=True, blank=True)
    description = models.JSONField()
    url_web = models.CharField(max_length=300)
    url_image = models.CharField(max_length=300)
