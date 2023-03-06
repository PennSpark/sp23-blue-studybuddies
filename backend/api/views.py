from rest_framework import viewsets
from .serializers import PostSerializer
from .models import Post

# Create your views here.


class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all().order_by('published_date')
    serializer_class = PostSerializer
