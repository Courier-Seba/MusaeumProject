# Informe de tecnologías

## Índice
- Lista general de herramientas
- Arquitectura
- Evaluación para la elección

## Lista general de herramientas
### Lenguajes de programación
- Python
- JavaScript
- SQL
- Bash

### Frameworks
- Django(python)
- Django rest (python)
- Vue (JavaScript)
- Axios (JavaScript)

#### Sub-librerías
- Django
    * Django cors headers
    * Django rest auth
    * Django allauth
    * Django simple jwt
    * Django filter
- Vue
    * Vuex
    * Vue router
    * Vue i18n
    * Buefy / Bulma
    * FontAwesome 5
    * Sass
    * Vueper Slides

### Herramientas para Desarrollo
- Node Js
- Node Package Manager
- Vue CLI Service
- Pipenv

### Herramientas de produccion (servidor)
- Sistema operativo: Linux
- Data Base Management System: PostgresSQL
- Web server y reverse proxy: NginX
- Django web server: Gunicorn

## Arquitectura

### Diagrama
![](/home/courier/Proyectos/ProjectMusaeum/musaeum/docs/soft_arch.jpg)

### Explicación
​	La arquitectura elegida fue el moderno modelo de cliente-servidor, donde se separa los trabajos del servidor de los de cliente. El cliente consiste en una aplicación estática de JavaScript que puede ser interpretada por cualquier navegador moderno o otro tipo de aplicación que pueda soportar la aplicación (Ej: Electron). La conexión entre las 2 partes se lleva a cabo de técnicas AJAX formando una aplicación en el servidor para conectar la base de datos (Postgres) y las imágenes almacenadas a través de un RESTful API (Transferencia de Estado Representacional) que permite hacer consultas al servidor a través de métodos HTTP (1.1), esto se construye utilizando el framework de python django para interpretar los modelos y conectar la base de datos y luego su extensión para crear los puntos finales o urls para ser consumidos por el cliente.

​	El servidor web NginX recibe la petición del cliente al dominio raiz (dominio.proyecto) y sirve la aplicación en JS. A partir de allí el REST API se encuentra en un subdominio (api.dominio.proyecto) que el servidor web redirecciona a otro servidor web apto para django (gunicorn) que sirve sobre un puerto interno. Ante una peticion (dependiendo el tipo) interpreta la app de django desarrollada por el equipo y devuelve los resultados, ya sea para tomar o crear datos. Toda la información se almacena en una base de datos de PostgresSQL sobre el mismo sistema o de forma externa 

​	El cliente por otro lado toma la información y la guarda en un almacén o "store" global (vuex) que permite a los demás componentes de la interfaz de usuario tomar esa información  y renderizar utilizando el DOM (virtual) de Vue segun lo buscado. Los componentes se crean utilizando herramientas externas (en nuestro caso Buefy que son componentes basados en el framework de estilo Bulma) y son modificados acorde a la lógica buscada . Por ultimo para mantener muchos componentes relacionados se usan rutas internas (interpretadas como parte de 1 sola pagina) utilizando Vue Router.



## Evaluación para la elección

​	La elección de estos lenguajes y herramientas se basa en nuestra propia experiencia con ellos y con el apoyo a que todas ellas son de acceso libre (todas poseen licencias de software libre) que concuerda con el objetivo del proyecto.

​	El tipo de arquitectura se eligió por ser un modelo moderno y con facilidad de destructurar el código y abstraer la lógica de negocio lo más posible de las herramientas para poder mantener una estructura modular y flexible en vista general, permitiendo escalar el proyecto por etapas y no desarrollar un sistema incontenible.

​	Una primera versión de la interfaz se desarrollo con React.js pero se abandono debido a errores de arquitectura iniciales.