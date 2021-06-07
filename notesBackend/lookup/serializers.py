from rest_framework import serializers
from .models import TaskData

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = TaskData
        fields = ['title', 'desc']

        