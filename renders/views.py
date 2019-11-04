import json
import os

from django.http import HttpResponse, JsonResponse
from django.middleware.csrf import get_token
from django.views.generic import View as GenericView
from django.views.generic import TemplateView
from django.conf import settings
from rest_framework import status


class ReactTemplateView(TemplateView):
    def get_template_names(self):
        template_name = "index.html"
        return template_name


class View(GenericView):
    def dispatch(self, request, endpoint=None, *args, **kwargs):
        return getattr(self, endpoint)(request, *args, **kwargs)


def service_worker(request):
    with open(
        os.path.join(settings.BASE_DIR, "static", "build", "service-worker.js")
    ) as f:
        return HttpResponse(f.read(), content_type="application/x-javascript")


def manifest(request):
    with open(
        os.path.join(settings.BASE_DIR, "static", "build", "manifest.json")
    ) as f:
        return JsonResponse(json.load(f))


def favicon(request):
    with open(
        os.path.join(settings.BASE_DIR, "static", "build", "favicon.ico"), "rb"
    ) as f:
        return HttpResponse(f.read(), content_type="image/ico")


def precache_manifest(request):
    files = os.listdir(os.path.join(settings.BASE_DIR, "static", "build"))
    precache__manifest_file = None
    for file in files:
        if file.startswith("precache-manifest"):
            precache__manifest_file = file

    with open(
        os.path.join(
            settings.BASE_DIR, "static", "build", precache__manifest_file
        )
    ) as f:
        return HttpResponse(f.read(), content_type="application/x-javascript")


def csrf_token(request):
    response = HttpResponse(status=status.HTTP_200_OK)
    response.set_cookie("csrftoken", get_token(request))
    return response
