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
