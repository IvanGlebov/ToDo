# Generated by Django 3.2.5 on 2021-09-01 19:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('todo', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='task',
            name='status',
            field=models.CharField(choices=[(0, 'Not started'), (1, 'In progress'), (2, 'Done')], default='Ns', max_length=2),
        ),
    ]
