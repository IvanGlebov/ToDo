from django.contrib import admin
from .models import Task, List

# Register your models here.
admin.site.register(List)
admin.site.register(Task)