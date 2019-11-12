from rest_framework.views import APIView

ALLOWED_METHOD = {"get", "post"}


# noinspection PyMethodOverriding,PyAttributeOutsideInit
class View(APIView):
    def dispatch(self, request, method, *args, **kwargs):
        self.args = args
        self.kwargs = kwargs
        request = self.initialize_request(request, *args, **kwargs)
        self.request = request
        self.headers = self.default_response_headers

        try:
            self.initial(request, *args, **kwargs)
            if request.method.lower() in ALLOWED_METHOD:
                handler = getattr(self, method, self.http_method_not_allowed)
            else:
                handler = self.http_method_not_allowed

            response = handler(request, *args, **kwargs)

        except Exception as exc:
            response = self.handle_exception(exc)

        self.response = self.finalize_response(
            request, response, *args, **kwargs
        )
        return self.response
