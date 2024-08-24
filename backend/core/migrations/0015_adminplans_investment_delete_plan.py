# Generated by Django 5.0.7 on 2024-07-12 20:05

import django.db.models.deletion
import uuid
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0014_user_is_confirmed'),
    ]

    operations = [
        migrations.CreateModel(
            name='AdminPlans',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, primary_key=True, serialize=False, unique=True)),
                ('name', models.CharField(max_length=50)),
                ('price', models.IntegerField()),
                ('duration', models.DurationField()),
            ],
        ),
        migrations.CreateModel(
            name='Investment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('price', models.IntegerField()),
                ('start', models.DateField(auto_now=True)),
                ('end', models.DateField(auto_now=True)),
                ('name', models.CharField(max_length=450)),
                ('plan', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='plans', to='core.adminplans')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='plans', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.DeleteModel(
            name='Plan',
        ),
    ]