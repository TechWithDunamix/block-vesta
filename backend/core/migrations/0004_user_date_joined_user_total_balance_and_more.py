# Generated by Django 4.2.6 on 2024-07-05 01:34

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0003_user_phone_user_referal_id_user_user_id'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='date_joined',
            field=models.DateField(auto_now_add=True, null=True),
        ),
        migrations.AddField(
            model_name='user',
            name='total_balance',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='user',
            name='total_bonuses',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='user',
            name='total_deposit',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='user',
            name='total_withdraw',
            field=models.IntegerField(default=0),
        ),
        migrations.CreateModel(
            name='Transaction',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, primary_key=True, serialize=False, unique=True)),
                ('transaction_type', models.CharField(max_length=120)),
                ('pending', models.BooleanField(default=False)),
                ('date', models.DateField(auto_now_add=True)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='transaction', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
