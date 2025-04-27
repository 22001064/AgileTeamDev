from django.urls import path
from .views import login_view
from tasks.views import task_list

urlpatterns = [
    path('login/', login_view, name='login'),
    path('tasks/', task_list, name='task_list'),
]
