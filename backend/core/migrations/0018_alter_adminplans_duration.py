# Generated by Django 5.0.7 on 2024-07-13 14:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0017_adminplans_pir'),
    ]

    operations = [
        migrations.AlterField(
            model_name='adminplans',
            name='duration',
            field=models.CharField(max_length=560),
        ),
    ]
