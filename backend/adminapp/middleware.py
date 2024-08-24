from rest_framework.response import Response
from rest_framework import status
from rest_framework.renderers import JSONRenderer
from django.http import HttpResponseForbidden
from .models import AdminUser
class AdminMixin:
    def dispatch(self, request, *args, **kwargs):
        print(request.headers)
        
        if not request.headers.get("HTTP_ADMIN_TOKEN"):
            return HttpResponseForbidden("Admin credentials not created ")
        try:
            user = AdminUser.objects.get(token = request.headers.get("HTTP_ADMIN_TOKEN"))
            
        except AdminUser.DoesNotExist:
            return HttpResponseForbidden("Admin credentials not created ")
            
        return super().dispatch(request, *args, **kwargs)
    
    
