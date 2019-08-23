pipenv install

pipenv run python manage.py makemigrations users museum artifact monument
pipenv run python manage.py migrate
pipenv run python manage.py createsuperuser
pipenv run python manage.py runserver
