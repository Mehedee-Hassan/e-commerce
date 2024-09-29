from django.urls import path

from . import views

urlpatterns = [
    # these url patterns follows the urls on views.py
    path("", views.getRoutes),
    path("products/", views.getProducts),
    path("products/<str:product_key>", views.getProduct),
]
