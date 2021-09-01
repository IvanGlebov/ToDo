from django.conf import settings
from django.conf.urls.static import static
from django.urls import path, re_path, include

import todo.views as views

tasksApiPatterns = [
    path('list', views.list_tasks),
    path('add', views.add_task)
]

apiPatterns = [
    path('tasks/', include(tasksApiPatterns))
]

urlpatterns = [
    path('api/', include(apiPatterns))
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

if settings.DEBUG:
    urlpatterns += [
        re_path('.*', views.frontend)
    ]
