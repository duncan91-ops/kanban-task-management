from rest_framework.exceptions import APIException


class BoardNotFound(APIException):
    status_code = 404
    default_detail = "The board you requested is not available"


class NotYourBoard(APIException):
    status_code = 403
    default_detail = "You are not allowed to edit board that does not belong to you"
