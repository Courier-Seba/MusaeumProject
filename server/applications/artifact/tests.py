from rest_framework.test import APITestCase
from django.contrib.auth import get_user_model
from rest_framework.reverse import reverse
import mock
from .models import Artifact
from applications.museum.models import Museum, MuseumType

user = get_user_model()

class ArtifactApiTestCase(APITestCase):

    def setUp(self):
        username = 'admin'
        password = 'asdfqwerasdf'
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

    def test_can_create_artifact(self):
        req = self.client.post(
            reverse('artifact-list'),
            {
                'name': 'Artifact test',
                'description': 'Testing artifact',
                'museum': self.museum.id,
            },
            format='json'
        )
        self.assertEqual(req.status_code, 201)

    def test_can_retrive_artifact_list(self):
        self.test_can_create_artifact()
        req = self.client.get(reverse('artifact-list'))
        self.assertIsInstance(req.data['results'], list)
        self.assertEqual(req.data['results'][0]['name'], 'Artifact test')


