from django.db import models

class Entry(models.Model):
    title = models.CharField(max_length=100)
    message = models.CharField(max_length=500)
    created_at = models.DateTimeField(auto_now_add=True)
