# Generated by Django 4.1.5 on 2023-02-05 21:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('apiCelu', '0005_alter_cell_phones_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cell_phones',
            name='id',
            field=models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='id'),
        ),
    ]