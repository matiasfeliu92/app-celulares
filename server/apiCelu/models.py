from django.db import models

# Create your models here.
from django.db import models, migrations

# Create your models here.
class Celulares(models.Model):
    nombre = models.CharField(max_length=100, unique=True)
    precio = models.IntegerField()