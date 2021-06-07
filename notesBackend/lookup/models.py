from django.db import models

class TaskData(models.Model):
    title = models.TextField(max_length=20, null = True, blank=True)
    desc = models.TextField(max_length=200, null=True, blank=True)

    def __str__(self):
        return str(self.title)