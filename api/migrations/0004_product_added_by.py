# Generated by Django 2.2.1 on 2019-05-14 11:47

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_auto_20190514_1640'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='added_by',
            field=models.ForeignKey(default=6, on_delete=django.db.models.deletion.CASCADE, to='api.Customer'),
        ),
    ]
