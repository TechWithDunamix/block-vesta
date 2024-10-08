# Generated by Django 4.2.6 on 2024-07-02 08:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0002_user_country'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='phone',
            field=models.CharField(default=None, max_length=50),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='user',
            name='referal_id',
            field=models.CharField(default=None, max_length=50, null=True),
        ),
        migrations.AddField(
            model_name='user',
            name='user_id',
            field=models.CharField(default=None, max_length=50),
            preserve_default=False,
        ),
    ]
