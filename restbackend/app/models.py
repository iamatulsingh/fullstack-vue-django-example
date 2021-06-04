from django.db import models

class Posts (models.Model):

    title = models.CharField(max_length=250)
    content = models.TextField()


    def __str__(self) -> str:
        return self.title