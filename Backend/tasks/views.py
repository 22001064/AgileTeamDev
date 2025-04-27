from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse, HttpResponseNotAllowed
from .models import Task
import json

@csrf_exempt
def task_list(request):
    if request.method == "GET":
        tasks = list(Task.objects.all().values('id', 'task', 'status', 'priority', 'assignee', 'type', 'start', 'end', 'due_date'))
        return JsonResponse(tasks, safe=False)

    elif request.method == "POST":
        data = json.loads(request.body)
        task = Task.objects.create(
            task=data.get("task"),
            assignee=data.get("assignee"),
            status=data.get("status", "To Do"),
            type=data.get("type", "Task"),
            priority=data.get("priority", "Low"),
            start=data.get("start"),
            end=data.get("end"),
            due_date=data.get("due_date")
        )
        return JsonResponse({"message": "Task created", "id": task.id})

    return HttpResponseNotAllowed(["GET", "POST"])
    
@csrf_exempt
def task_detail(request, task_id):
    try:
        task = Task.objects.get(id=task_id)
    except Task.DoesNotExist:
        return JsonResponse({"error": "Task not found"}, status=404)

    if request.method == "PUT":
        data = json.loads(request.body)
        task.task = data.get("task", task.task)
        task.assignee = data.get("assignee", task.assignee)
        task.status = data.get("status", task.status)
        task.due_date = data.get("due_date", task.due_date)
        task.type = data.get("type", task.type)
        task.priority = data.get("priority", task.priority)
        task.start = data.get("start", task.start)
        task.end = data.get("end", task.end)
        task.save()
        return JsonResponse({"message": "Task updated"})

    elif request.method == "DELETE":
        task.delete()
        return JsonResponse({"message": "Task deleted"})

    return HttpResponseNotAllowed(["PUT", "DELETE"])