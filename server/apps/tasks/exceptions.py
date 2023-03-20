from rest_framework.exceptions import APIException


class TaskNotFound(APIException):
    status_code = 404
    default_detail = "The task you requested cannot be found"


class NotYourTask(APIException):
    status_code = 403
    default_detail = "You are not allowed to edit a task that does not belong to you"


class SubtaskNotFound(APIException):
    status_code = 404
    default_detail = "The subtask you requested cannot be found"


class NotYourSubtask(APIException):
    status_code = 403
    default_detail = "You are not allowed to edit a task that does not belong to you"
