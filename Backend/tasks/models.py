from django.db import models

class Task(models.Model):
    STATUS_CHOICES = [
        ('To Do', 'To Do'),
        ('In Progress', 'In Progress'),
        ('Complete', 'Complete'),
    ]
    
    task = models.CharField(max_length=255)
    assignee = models.CharField(max_length=100)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='To Do')
    priority = models.CharField(max_length=10, default='Low')
    due_date = models.DateField(null=True, blank=True)

    start = models.DateField(null=True, blank=True)
    end = models.DateField(null=True, blank=True)
    
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.task