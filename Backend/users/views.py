from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import authenticate
from rest_framework_simplejwt.tokens import RefreshToken

class LoginAPIView(APIView):
    def post(self, request):
        username = request.data.get("username")
        password = request.data.get("password")
        remember_me = request.data.get("rememberMe", False)

        user = authenticate(username=username, password=password)
        if user is None:
            return Response({"error": "Invalid credentials"}, status=status.HTTP_401_UNAUTHORIZED)

        if user.role == "admin" and remember_me:
            return Response({"error": "Admins cannot use Remember Me"}, status=status.HTTP_403_FORBIDDEN)

        refresh = RefreshToken.for_user(user)

        if remember_me:
            refresh.set_exp(lifetime=604800)  # 7 days

        return Response({
            "refresh": str(refresh),
            "access": str(refresh.access_token),
            "user": {"username": user.username, "role": user.role}
        })
