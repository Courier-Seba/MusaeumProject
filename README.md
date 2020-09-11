# Musaeum Project

## Museaum server

### Requirements

- Python 3.8
- Pip
- PipEnv

### Install
> A secret key is required. Just generate one and add it as KEY constant in a secret.py file.

1. In folder start the python enviroment
Download the requirements and install them. Later start the shell in the new enviroment.
```sh
$ pipenv install
$ pipenv shell
```
The next step assume you are in the python enviroment.

2. Make the first migration
Make the migration files of the database models of our apps
```sh
$ python manage.py makemigrations users museum artifact monument
```
Migrate to the databese:
```sh
$ python manage.py migrate
```

3. Run server
Run the server.
```sh
$ python manage.py runserver
```
If the others steps were already done and just want to run the server, you could use:
```sh
$ pipenv run python manage.py runserver
```
