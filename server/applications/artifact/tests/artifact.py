from rest_framework.test import APITestCase
from django.contrib.auth import get_user_model
from rest_framework.reverse import reverse
from django.core.files.uploadedfile import SimpleUploadedFile
from applications.artifact.models import Artifact
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

    def create_artifact(self):
        req = self.client.post(
            reverse('artifact-list'),
            {
                'name': 'Artifact test',
                'description': 'Testing artifact',
                'museum': self.museum.id,
            },
            format='json'
        )
        return req

    def test_can_create_artifact(self):
        req = self.create_artifact()
        self.assertEqual(req.status_code, 201)

    def test_can_retrive_artifact_list(self):
        self.create_artifact()
        req = self.client.get(reverse('artifact-list'))
        self.assertIsInstance(req.data['results'], list)
        self.assertEqual(req.data['results'][0]['name'], 'Artifact test')

    def test_create_artifact_image(self):
        self.create_artifact()
        image_mock = SimpleUploadedFile(
            name='test_image.jpg',
            content=open('applications/artifact/tests/image_mock.jpg', 'rb').read(),
            content_type='image/jpeg'
        )
        req = self.client.post(
            reverse('artifactimage-list'),
            {
                'artifact': 1, # TODO hardcoded this
                'image': image_mock
            },
            format='multipart'
        )
        self.assertEqual(req.status_code, 201)

    def test_create_artifact_tag(self):
        req = self.client.post(
            reverse('artifacttag-list'),
            {
                'name': 'TestTag'
            },
            format='json'
        )
        self.assertEqual(req.status_code, 201)


    def test_create_artifact_collection(self):
        req = self.client.post(
            reverse('artifactcollection-list'),
            {
                'title': 'Collection Test',
                'description': 'Collection Test',
                'museum': self.museum.id
            },
            format='json'
        )
        self.assertEqual(req.status_code, 201)

    def test_add_collection_to_artifact(self):
        self.client.post(
            reverse('artifactcollection-list'),
            {
                'title': 'Collection Test',
                'description': 'Collection Test',
                'museum': self.museum.id
            },
            format='json'
        )
        self.create_artifact()
        req = self.client.patch(
            reverse('artifact-detail', args=[1]),
            {
                'collection': [1]
            },
            format='json'
        )
        self.assertEqual(req.status_code, 200)

    def test_create_comment_of_artifact(self):
        self.create_artifact()
        req = self.client.post(
            reverse('artifactcomment-list'),
            {
                'artifact': 1,
                'user': self.user.id,
                'message': 'Mensage test'
            },
            format='json'
        )
        self.assertEqual(req.status_code, 201)
