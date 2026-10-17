from django.urls import path
from .views import LoginView, ProductListView, RegisterView

urlpatterns = [
    path("products/", ProductListView.as_view(), name="product-list"),
    path("auth/register/", RegisterView.as_view(), name="register"),
    path("auth/login/", LoginView.as_view(), name="login"),
]