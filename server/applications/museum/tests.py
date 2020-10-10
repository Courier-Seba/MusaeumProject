from rest_framework.test import APITestCase
from django.contrib.auth import get_user_model
from rest_framework.reverse import reverse
from .models import Museum, MuseumType

user = get_user_model()

class MuseumApiTestCase(APITestCase):

    def setUp(self):
        username = "admin"
        password = "asdfqwerasdf"
        self.user = user.objects.create_user(
            username=username,
            password=password
        )
        self.type = MuseumType.objects.create(museum_type='test')
        self.museum = Museum.objects.create(
            user=self.user,
            name='Museum Test',
            country='AR',
            city='Rosario',
            museum_type=self.type
        )
        self.client.force_authenticate(user=self.user)

    def test_museum_search_by_user_id(self):
        req = self.client.get(
            reverse('museum-detail', args=[self.user.id])
        )
        self.assertEqual(req.data['user'], self.user.id)

    def test_museum_star(self):
        req = self.client.post(
            reverse('museumstar-list'),
            {
                'user': self.user.id,
                'museum': self.museum.id,
                'status': True
            },
            format='json'
        )
        self.assertEqual(req.status_code, 201)
