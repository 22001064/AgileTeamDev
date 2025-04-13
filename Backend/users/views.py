from django.contrib.auth import authenticate, login
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

from django.http import HttpResponse

def home_view(request):
    return HttpResponse("Welcome to the NestCafe API backend.")

@csrf_exempt  # Allows POST requests from frontend without CSRF token for now
def login_view(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body.decode('utf-8'))
            username = data.get("username")
            password = data.get("password")
            remember_me = data.get("remember_me", False)

            user = authenticate(request, username=username, password=password)

            if user is not None:
                if user.role == "admin" and remember_me:
                    return JsonResponse({"error": "Admins are not allowed to use Remember Me."}, status=403)

                login(request, user)

                # Set session expiry depending on remember_me
                if remember_me:
                    request.session.set_expiry(604800)  # 7 days
                else:
                    request.session.set_expiry(3600)  # 1 hour

                return JsonResponse({"message": "Login successful", "user": user.username, "role": user.role})

            else:
                return JsonResponse({"error": "Invalid username or password"}, status=401)

        except Exception as e:
            return JsonResponse({"error": str(e)}, status=400)

    return JsonResponse({"error": "Only POST requests allowed"}, status=405)
