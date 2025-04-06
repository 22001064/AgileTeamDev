"""
URL configuration for backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/

Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.contrib import admin  # Import Django's built-in admin module
from django.urls import path, include  # Import functions to define URL paths and include other URLconfs
from django.conf import settings  # Import settings to access static/media configurations
from django.conf.urls.static import static  # Import helper to serve static/media files in development

urlpatterns = [
    path('admin/', admin.site.urls),  # 🛠 Admin panel accessible at /admin/
    path('api/users/', include('users.urls')),  # 🔗 Includes URLs from users app, such as login_view
]

# 🖼 Serve media files during development (e.g., user-uploaded content)
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

# 🎨 Serve static files during development (e.g., CSS, JS, images)
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
