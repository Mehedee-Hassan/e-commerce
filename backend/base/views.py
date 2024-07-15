from django.shortcuts import render
from django.http import JsonResponse

from .models import Product
from .products import products
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .serializers import ProductsSerializer


@api_view(['GET'])
def getRoutes(requests):

    routes = [
        '/v1/api/products',
        '/v1/api/products/create',
        '/v1/api/products/upload',
        '/v1/api/products/<id>/reviews/',

        '/v1/api/products/top/',
        '/v1/api/products/<id>/',

        '/v1/api/products/delete/<id>/',
        '/v1/api/products/<update>>/<id>/',

    ]
    return Response(routes)


@api_view(['GET'])
def getProducts(requests):
    products = Product.objects.all()
    serializer  = ProductsSerializer(products, many=True)
    return Response(serializer.data)



@api_view(['GET'])
def getProduct(requests,product_key):

    product = Product.objects.get(_id=product_key)
    serializer = ProductsSerializer(product, many=False)
    return Response(serializer.data)