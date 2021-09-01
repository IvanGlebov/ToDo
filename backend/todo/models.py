import uuid

from django.db import models


# Create your models here.
class List(models.Model):

    name = models.CharField(max_length=50, help_text="Tasks list name")

    def __str__(self):
        return self.name


class Task(models.Model):

    name = models.CharField(max_length=50, help_text="Input task name here")
    description = models.TextField(blank=True, help_text="Task description")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    attachments = models.FileField(blank=True, upload_to='tasks/attachments/%Y/%m/%d/')
    STATUS = [
        ('0', "Not started"),
        ('1', "In progress"),
        ('2', "Done"),
    ]
    in_lists = models.ManyToManyField(List, default='All tasks')
    status = models.CharField(max_length=2, choices=STATUS, default="Ns")

    def to_short_dict(self):
        return {
            'name': self.name,
            'description': self.description,
            'id': self.id,
            # 'inLists': self.in_lists,
            'status': self.status
        }

    def __str__(self):
        return self.name
