from django.shortcuts import render
from django.http import JsonResponse
from .products import products
from rest_framework.decorators import api_view
from rest_framework.response import Response


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
    return Response(products)



@api_view(['GET'])
def getProduct(requests,product_key):

    product_response = None
    for product in products:
        if product['_id'] == product_key:
            product_response = product

    return Response(product_response)