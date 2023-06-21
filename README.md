# Cuaderno Digital

![](https://media.giphy.com/media/56ikf9jD4ZK6s/giphy.gif)

Cuaderno Digital es una aplicación web que ayuda a los usuarios a guardar y organizar sus tareas diarias. El proyecto se ha desarrollado utilizando Vite, React, Tailwind CSS y Firebase.

## Características

-   Registro y autenticación de usuarios utilizando Firebase Authentication.
-   Creación, edición y eliminación de tareas.
-   Marcar tareas como completadas o pendientes.
-   Interfaz intuitiva y fácil de usar.

## Demo

Puedes ver una demostración en vivo de la aplicación [aquí](https://cuaderno-digital-5zpt.vercel.app/).

## Instalación

1.  Clona el repositorio:

`git clone https://github.com/YessBlack/cuaderno-digital.git` 

2.  Navega al directorio del proyecto:

`cd cuaderno-digital` 

3.  Instala las dependencias:

`npm install` 

4.  Crea un proyecto en Firebase y configura las credenciales en un archivo `.env-local` (ver variables de entorno con vite: https://vitejs.dev/guide/env-and-mode.html)
    
5.  Inicia la aplicación en modo de desarrollo:

`npm run dev` 

La aplicación estará disponible en [http://localhost:5173/](http://localhost:5173/).

## Despliegue

El proyecto está configurado para desplegarse en Vercel. Puedes seguir la documentación oficial de Vercel para realizar el despliegue de tu propia instancia.


## Detalles de la implementación

En este proyecto, desarrollé una aplicación de tareas utilizando React y Firebase como base tecnológica. El objetivo principal era proporcionar a los usuarios una plataforma intuitiva y fácil de usar para gestionar sus tareas diarias.

### Arquitectura y tecnologías utilizadas

La arquitectura del proyecto se basa en componentes de React que se comunican entre sí a través de props y estados. Utilicé Vite como herramienta de desarrollo para aprovechar su capacidad de compilación rápida y optimización de recursos, Tailwind CSS para dar estilos y React Router Dom para realizar la gestión de rutas en la aplicación 

Además, integré Firebase como backend para la autenticación de usuarios y el almacenamiento de datos. Utilicé Firebase Authentication para permitir que los usuarios se registren e inicien sesión. Firebase Firestore se utilizó para almacenar y recuperar las tareas de los usuarios.

### Funcionalidades principales

La aplicación ofrece las siguientes funcionalidades principales:

1.  Registro y autenticación de usuarios: Los usuarios pueden crear una cuenta utilizando su dirección de correo electrónico y una contraseña segura. Utilicé Firebase Authentication para gestionar el proceso de registro y autenticación de usuarios.
    
2.  Lista de tareas: Los usuarios pueden ver una lista de tareas pendientes, completadas y en progreso. Utilicé Firebase Firestore para almacenar y recuperar las tareas de cada usuario. Las tareas se actualizan en tiempo real a medida que los usuarios realizan cambios.
    
3.  Creación y edición de tareas: Los usuarios pueden crear nuevas tareas especificando la tarea.
    
4.  Marcar tareas como completadas: Los usuarios pueden marcar las tareas como completadas y viceversa. Esta información se actualiza instantáneamente en la base de datos de Firebase.
    
5.  Eliminación de tareas: Los usuarios pueden eliminar tareas que ya no deseen mantener en la lista.
    

### Decisiones de diseño

En términos de diseño, opté por una paleta de colores acentuados y una interfaz de usuario minimalista para mantener el enfoque en las tareas. 
[Ver diseño en figma](https://www.figma.com/file/8VrzVHOBu9VLSMfn199XWR/app-notas?type=design&node-id=0%3A1&t=sMOZPaAe84nnOTlX-1)

Además, implementé un diseño de respuesta para garantizar que la aplicación se vea y funcione bien en diferentes dispositivos y tamaños de pantalla.

### Retos y soluciones

Durante el desarrollo, uno de los principales desafíos fue sincronizar los datos en tiempo real entre la aplicación y Firebase Firestore. Para superar esto, utilicé las capacidades de escucha en tiempo real de Firestore y actualicé la interfaz de usuario en consecuencia cuando se producían cambios en los datos.

## Video de presentación

[Ver video en YouTube](https://youtu.be/dGZ45zfa_U0)


