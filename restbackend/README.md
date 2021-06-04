# restbackend

[![Made with Django](https://img.shields.io/badge/Made%20with-Django-green?style=for-the-badge&logo=django)](https://www.djangoproject.com/)

[![Made with django-rest-framework](https://img.shields.io/badge/Made%20with-djangorestframework-blue?style=for-the-badge&logo=djangorestframework)](https://www.django-rest-framework.org/)

[![Made with djangorestframework-simplejwt](https://img.shields.io/badge/Made%20with-djangorestframework-orange?style=for-the-badge&logo=djangorestframework-simplejwt)](https://github.com/jazzband/djangorestframework-simplejwt)

This is a simple Django App which will create API from the data stored in sqlite database using `admin` account and it's also having `JWT` integrated to make API <b>SECURE</b>

## DEMO
<br />
<figure>
    <img src="./screenshots/1.png" alt="posts"/>
    <figcaption>Posts Data</figcaption>
</figure>
<br />
<figure>
    <img src="./screenshots/2.png" alt="Home"/>
    <figcaption>Home Page</figcaption>
</figure>

## Project setup
```
pip install -r requirements.txt
python manage.py makemigrations
python manage.py migrate
```

### Run server for development
```
python manage.py runserver
```
