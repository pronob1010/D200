from django.urls import path
from . import views
from .views import TaskAPIView, TaskListAPIView, TaskCreateAPIView

urlpatterns = [
    path('', views.index, name="index"),
    path('apiv1/', TaskAPIView.as_view()),
    path('apiv2/', TaskListAPIView.as_view()),
    path('apiv3/', TaskCreateAPIView.as_view()),

]
