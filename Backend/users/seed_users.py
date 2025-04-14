from django.contrib.auth.hashers import make_password
from users.models import CustomUser

# How to Run the Seeder In your terminal: python manage.py shell
# Then: from users.seed_users import run
# run()

def run():
    users = [
        {
            "username": "admin1@example.com",
            "email": "admin1@example.com",
            "password": "adminpass123,",
            "role": "admin"
        },
        {
            "username": "user1@example.com",
            "email": "user1@example.com",
            "password": "userpass123,",
            "role": "user"
        }
    ]

    for u in users:
        if not CustomUser.objects.filter(username=u["username"]).exists():
            CustomUser.objects.create(
                username=u["username"],
                email=u["email"],
                password=make_password(u["password"]),
                role=u["role"]
            )
            print(f"Created user: {u['username']}")
        else:
            print(f"User already exists: {u['username']}")

    # Superuser
    if not CustomUser.objects.filter(username="superadmin").exists():
        CustomUser.objects.create_superuser(
            username="superadmin",
            email="superadmin@example.com",
            password="superpass123,",
            role="admin"
        )
        print("Superuser 'superadmin' created")
    else:
        print("Superuser 'superadmin' already exists")
