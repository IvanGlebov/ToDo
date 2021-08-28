from django.shortcuts import render
from django.http import JsonResponse

from todo.models import Task, List
# Create your views here.


def list_tasks(request, page=1):
    page_size = 30
    tasks = Task.objects.filter(status=True)
    tasks_count = tasks.count()
    return JsonResponse({
        'tasks': dict((task.id, task.to_shor_dict()) for task in tasks.all()[page_size*page:page_size+page+page_size]),
        'total': tasks_count,
        'pages': tasks_count // page_size,
        'page': page + 1
    })
