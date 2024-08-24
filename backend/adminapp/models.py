from django.db import models
from django.utils.crypto import get_random_string
class AdminUser(models.Model):
    email = models.EmailField(max_length=254)
    password = models.CharField(max_length=354)
    token = models.TextField()
    def save(self,*args,**kwargs):
        self.token = get_random_string(32)
        super().save(*args,**kwargs)
    class Meta:
        """Meta definition for AdminUser."""

        verbose_name = 'AdminUser'
        verbose_name_plural = 'AdminUsers'

    