from django.db import models
from django.contrib.auth.models import User

class Entry(models.Model):
    title = models.CharField(max_length=100)
    message = models.CharField(max_length=500)
    owner = models.ForeignKey(User, related_name='todayentry', on_delete=models.CASCADE, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
