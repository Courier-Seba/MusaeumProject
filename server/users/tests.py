from rest_framework.test import APITestCase
from django.contrib.auth import get_user_model
from django.urls import reverse

user = get_user_model()

class AuthTokenTestCase(APITestCase):
    username = "admin"
    password = "asdfqwerasdf"
    email = "admin@mail.com"

    def setUp(self):
        self.user = user.objects.create_user(
            username=self.username,
            password=self.password,
            email=self.email,
        )

    def test_retrive_token_status_is_200(self):
        req = self.client.post(
            reverse('token_obtain_pair'),
            {
                'username':self.username,
                'password':self.password
            },
            format='json'
        )
        self.assertEqual(req.status_code, 200)


    def test_can_retrive_access_token(self):
        req = self.client.post(
            reverse('token_obtain_pair'),
            {
                'username':self.username,
                'password':self.password
            },
            format='json'
        )
        self.assertIsInstance(req.data['access'], str)

    def test_can_retrive_refresh_token(self):
        req = self.client.post(
            reverse('token_obtain_pair'),
            {
                'username':self.username,
                'password':self.password
            },
            format='json'
        )
        self.assertIsInstance(req.data['refresh'], str)

    def test_can_refresh_token(self):
        first_req = self.client.post(
            reverse('token_obtain_pair'),
            {
                'username':self.username,
                'password':self.password
            },
            format='json'
        )
        refresh_token_req = self.client.post(
            reverse('token_refresh'),
            {
                'refresh': first_req.data['refresh']
            },
            format='json'
        )
        self.assertIsInstance(refresh_token_req.data['access'], str)

    def test_can_retrive_username_by_id(self):
        req = self.client.get(
            reverse('username', args=[1]),
        )
        self.assertEqual(req.data['username'], self.username)

    def test_can_retrive_user_email_by_id(self):
        req = self.client.get(
            reverse('user-email', args=[1]),
        )
        self.assertEqual(req.data['email'], self.email)
