# tests/test_auth.py

import pytest
from django.urls import reverse
from users.models import CustomUser
from django.contrib.auth.hashers import make_password

@pytest.fixture
def create_users(db):
    CustomUser.objects.create(
        username="admin1@example.com",
        email="admin1@example.com",
        password=make_password("adminpass123"),
        role="admin"
    )
    CustomUser.objects.create(
        username="user1@example.com",
        email="user1@example.com",
        password=make_password("userpass123"),
        role="user"
    )

@pytest.mark.django_db
def test_successful_login_user(client, create_users):
    response = client.post(
        reverse("login"),
        data={
            "username": "user1@example.com",
            "password": "userpass123",
            "role": "user",
            "remember_me": False
        },
        content_type="application/json"
    )
    assert response.status_code == 200
    assert response.json()["message"] == "Login successful"

@pytest.mark.django_db
def test_wrong_password(client, create_users):
    response = client.post(
        reverse("login"),
        data={
            "username": "user1@example.com",
            "password": "wrongpass",
            "role": "user"
        },
        content_type="application/json"
    )
    assert response.status_code == 401
    assert "Invalid username or password" in response.json()["error"]

@pytest.mark.django_db
def test_wrong_role(client, create_users):
    response = client.post(
        reverse("login"),
        data={
            "username": "user1@example.com",
            "password": "userpass123",
            "role": "admin"
        },
        content_type="application/json"
    )
    assert response.status_code == 403
    assert "not authorized" in response.json()["error"]

@pytest.mark.django_db
def test_admin_with_remember_me_forbidden(client, create_users):
    response = client.post(
        reverse("login"),
        data={
            "username": "admin1@example.com",
            "password": "adminpass123",
            "role": "admin",
            "remember_me": True
        },
        content_type="application/json"
    )
    assert response.status_code == 403
    assert "Admins are not allowed" in response.json()["error"]

@pytest.mark.django_db
def test_missing_fields(client):
    response = client.post(
        reverse("login"),
        data={},
        content_type="application/json"
    )
    assert response.status_code == 401 or response.status_code == 400

