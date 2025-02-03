from django.db import models
from django.core.exceptions import ValidationError
from django.db.models.signals import pre_save
from django.utils.translation import gettext_lazy as _
from django.dispatch import receiver
import os

# Create your models here.

def validate_image_extension(value):
    allowed_extensions = ['.png', '.jpg', '.jpeg']
    ext = str(value).lower().split('.')[-1]
    if not ext in allowed_extensions:
        raise ValidationError(
            _('Invalid file format. Only PNG and JPG/JPEG are allowed.'),
            code='invalid_image'
        )
    

# =============== THUMBNAIL PICTURES ===================================================
class thumbnails(models.Model):
    title = models.CharField(max_length=200, primary_key=True)
    image = models.ImageField(upload_to='media/static/thumbnails/', validators=[validate_image_extension])

    def __str__(self):
        return self.image
    



@receiver(pre_save, sender=thumbnails)
def delete_previous_image(sender, instance, **kwargs):
    # Check if the instance already exists in the database
    if instance.pk:
        try:
            # Retrieve the previous instance from the database
            previous_instance = thumbnails.objects.get(pk=instance.pk)

            # Check if the image has changed
            if previous_instance.image and previous_instance.image != instance.image:
                # Delete the previous image file
                if os.path.isfile(previous_instance.image.path):
                    os.remove(previous_instance.image.path)

        except thumbnails.DoesNotExist:
            pass


