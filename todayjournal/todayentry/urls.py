from rest_framework import routers
from .api import EntryViewSet

router = routers.DefaultRouter()
router.register('api/todayentry', EntryViewSet, 'todayentry')

urlpatterns = router.urls
