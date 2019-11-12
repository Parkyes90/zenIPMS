from django.urls import path, re_path
from renders import views

app_name = "renders"

urlpatterns = [path("", views.ReactTemplateView.as_view(), name="entry-point")]
