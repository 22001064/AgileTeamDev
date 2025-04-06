from django.urls import path  # Import the path function to define URL patterns
from .views import LoginAPIView  # Import the view that will handle the login endpoint

urlpatterns = [
    path('login/', LoginAPIView.as_view(), name='login'),  # Route for login API — uses class-based view
    # When a POST request is made to /api/users/login/, it will trigger LoginAPIView
]
