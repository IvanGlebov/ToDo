import uuid

from django.conf import settings
from django.shortcuts import render
from django.http import JsonResponse

from todo.models import Task, List


def frontend(request):
    response = render(request, 'index.html', {
        'debug': 'true' if settings.DEBUG else 'false',
    })

    if request.COOKIES.get('webClientId') is None:
        response.set_cookie('webClientId', str(uuid.uuid1()))

    return response


def list_tasks(request, page=1):
    print(request)
    tasks = Task.objects.all()
    page_size = 24
    # print(tasks)
    # print(tasks[0].to_short_dict())
    # for task in tasks:
    #     print(dict(task.id, task.to_short_dict()))
    # dict((task.id, task.to_short_dict()) for task in tasks)
    return JsonResponse({
        'tasks': list((task.to_short_dict()) for task in tasks),
        'total': tasks.count(),
        'pages': tasks.count() // page_size,
        'page': page+1
    })
