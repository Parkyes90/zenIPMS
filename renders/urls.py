from django.urls import path, re_path
from renders import views

app_name = "renders"

urlpatterns = [
    path("index.html", views.ReactTemplateView.as_view()),
    path("service-worker.js", views.service_worker),
    path("manifest.json", views.manifest),
    path("favicon.ico", views.favicon),
    path("csrf_token", views.csrf_token),
    re_path(r"^precache-manifest.*", views.precache_manifest),
    re_path(r"^.*$", views.ReactTemplateView.as_view(), name="entry-point"),
]
