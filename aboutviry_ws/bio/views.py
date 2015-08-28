from django.shortcuts import render

from .models import About

def index(request):
    description = About.objects.order_by('-pub_date')[:5]
    context = {'description': description}
    return render(request, 'bio/index.html', context)
