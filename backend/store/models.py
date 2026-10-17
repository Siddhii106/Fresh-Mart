from django.db import models

class Product(models.Model):
    name = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=8, decimal_places=2)
    unit = models.CharField(max_length=30, help_text='For example "/kg" or "/dozen"')
    category = models.CharField(max_length=50)
    rating = models.DecimalField(max_digits=2, decimal_places=1, default=0)
    weight = models.CharField(max_length=30)
    tag = models.CharField(max_length=30, blank=True)
    image = models.ImageField(upload_to="products/")

    def __str__(self):
        return self.name
