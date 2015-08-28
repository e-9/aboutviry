from django.db import models

class About(models.Model):
    """docstring for About"""
    about_text = models.CharField(max_length = 500)
    pub_date = models.DateTimeField('fecha de publicacion')
