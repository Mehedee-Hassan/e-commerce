from django.shortcuts import render
from django.http import JsonResponse


def getRoutes(requests):
    return JsonResponse('Hello', safe=False)
