# Generated by Django 4.1.7 on 2023-03-06 19:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_post_location_alter_post_text'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='location',
            field=models.CharField(max_length=60),
        ),
    ]
