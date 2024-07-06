from django.shortcuts import render
from django.http import JsonResponse



def getRoutes(requests):
    routes = [
        '/v1/api/products',
        '/v1/api/products/create',
        '/v1/api/products/upload'

    ]
    return JsonResponse('Hello', safe=False)
