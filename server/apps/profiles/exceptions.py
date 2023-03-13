from rest_framework.exceptions import APIException


class ProfileNotFound(APIException):
    status_code = 404
    default_detail = "The requested profile is not available"


class NotYourProfile(APIException):
    status_code = 403
    default_detail = "You are not allowed to edit profile that does not belong to you"
