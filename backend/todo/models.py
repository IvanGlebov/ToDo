from django.db import models
import uuid
# Create your models here.


class List(models.Model):

    name = models.CharField(max_length=50, blank=False, help_text="List of tasks")

    def __str__(self):
        return self.name


class Task(models.Model):
    """
    Simple task model
    """

    # Fields
    id = models.UUIDField(primary_key=True, default=uuid.uuid4(), help_text="Unique ID for each task")
    name = models.CharField(max_length=50, help_text="Enter task name", blank=False)
    description = models.CharField(max_length=250, help_text="Enter task description", blank=True)
    created_at = models.DateTimeField(auto_created=True)
    status = models.BooleanField(help_text="task complete status")
    list = models.ManyToManyField(List, help_text="All lists where this task would be displayed")

    def __str__(self):
        return self.name
