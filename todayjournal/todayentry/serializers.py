from rest_framework import serializers
from todayentry.models import Entry

# Entry Serializer
class EntrySerializer(serializers.ModelSerializer):
    class Meta:
        model = Entry
        fields = '__all__'
