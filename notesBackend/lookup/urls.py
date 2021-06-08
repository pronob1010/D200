from django.urls import path
from . import views
from .views import TaskAPIView, TaskListAPIView, TaskCreateAPIView, TaskRetrieveAPIView, TaskUpdateAPIView, TaskDestroyAPIView

urlpatterns = [
    path('', views.index, name="index"),
    path('apiv1/', TaskAPIView.as_view()),
    path('apiv2/', TaskListAPIView.as_view()),
    path('apiv3/', TaskCreateAPIView.as_view()),
    path('apiv4/<pk>/', TaskRetrieveAPIView.as_view()),
    path('apiv5/<pk>/', TaskUpdateAPIView.as_view()),
    path('apiv6/<pk>/', TaskDestroyAPIView.as_view()),
]

