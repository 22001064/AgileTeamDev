from django.contrib.auth import authenticate, login  # Import functions to authenticate and log in a user
from django.http import JsonResponse  # Import JsonResponse to send JSON responses back to the frontend
from django.views.decorators.csrf import csrf_exempt  # Decorator to bypass CSRF checks for this view
import json  # Import JSON module to parse the request body

@csrf_exempt  # Allows POST requests from your frontend without CSRF token for now (you can improve this later)
def login_view(request):
    if request.method == "POST":  # Only handle POST requests
        try:
            # Parse JSON body from request
            data = json.loads(request.body.decode('utf-8'))
            username = data.get("username")  # Extract username from request
            password = data.get("password")  # Extract password from request
            remember_me = data.get("remember_me", False)  # Get "remember_me" flag, default to False if not provided

            # Authenticate the user
            user = authenticate(request, username=username, password=password)

            if user is not None:  # If authentication was successful
                # If user is admin and checked "Remember Me", return an error
                if user.role == "admin" and remember_me:
                    return JsonResponse({"error": "Admins are not allowed to use Remember Me."}, status=403)

                # Log the user in (starts session)
                login(request, user)

                # Set session expiry based on "remember_me" flag
                if remember_me:
                    request.session.set_expiry(604800)  # 7 days in seconds
                else:
                    request.session.set_expiry(3600)  # 1 hour in seconds

                # Return a success response with username and role
                return JsonResponse({"message": "Login successful", "user": user.username, "role": user.role})

            else:
                # Return error if credentials are invalid
                return JsonResponse({"error": "Invalid username or password"}, status=401)

        except Exception as e:
            # Return error if any unexpected exception occurs
            return JsonResponse({"error": str(e)}, status=400)

    # Return error for non-POST methods
    return JsonResponse({"error": "Only POST requests allowed"}, status=405)

