from django.contrib.auth.models import AbstractUser  # Import Django's base User model that we can extend
from django.db import models  # Import Django's models module to define database models

class CustomUser(AbstractUser):  # 🧑‍💼 Extends the built-in User model to add custom fields
    ROLE_CHOICES = (
        ('admin', 'Admin'),  # Option for admin role
        ('user', 'User'),    # Option for regular user role
    )
    role = models.CharField(max_length=10, choices=ROLE_CHOICES)  # 🔐 Role field to distinguish user types (admin/user)
