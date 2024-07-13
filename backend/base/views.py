from django.shortcuts import render
from django.http import JsonResponse



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
    return JsonResponse('Hello', safe=False)
