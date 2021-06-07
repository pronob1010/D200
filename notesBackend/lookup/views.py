from django.shortcuts import render
from .models import TaskData
from .serializers import TaskSerializer  

from rest_framework.views import APIView
from rest_framework.response import Response

def index(request):
    return render(request, 'index.html',{})

class TaskAPIView(APIView):
    def get(self, request, format = None):
        task_list = TaskData.objects.all()
        task_serializer = TaskSerializer(task_list, many = True)
        return Response(task_serializer.data)


from rest_framework.generics import ListAPIView

class TaskListAPIView(ListAPIView):
    queryset = TaskData.objects.all()
    serializer_class = TaskSerializer


from rest_framework.generics import CreateAPIView

class TaskCreateAPIView(CreateAPIView):
    queryset = TaskData.objects.all()
    serializer_class = TaskSerializer