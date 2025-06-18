# S5: Onboarding Digital (Angular, ITAcademy)

Este proyecto es una aplicación web interactiva desarrollada con Angular para mostrar un proceso de Onboarding digital. Permite a los usuarios navegar a través de una serie de pasos o "pantallas" de introducción utilizando botones de navegación.

## Tabla de Contenidos

- [Acerca del Proyecto](#acerca-del-proyecto)
- [Características](#características)
- [Demostración Visual](#demostración-visual)
- [Tecnologías Usadas](#tecnologías-usadas)
- [Instalación](#instalación)
- [Uso](#uso)
- [Licencia](#licencia)

## Acerca del Proyecto

La aplicación "Onboarding Digital" ha sido diseñada para ofrecer una experiencia de usuario guiada y visualmente atractiva. Su objetivo principal es presentar información paso a paso, ideal para nuevos usuarios o para introducir nuevas funcionalidades en un producto o servicio. La interfaz es limpia y se centra en la progresión controlada por el usuario.

## Características

* **Navegación Intuitiva:** Dos botones de navegación (`Avanzar` y `Retroceder`) para un control fácil del flujo del onboarding.
* **Contenido Dinámico:** La aplicación modifica el contenido y la imagen en función de la pantalla actual.
* **Diseño Responsivo:** Se adapta a diferentes tamaños de pantalla para una experiencia óptima en dispositivos móviles y de escritorio.
* **Basado en Componentes:** Modular, lo que facilita el mantenimiento del código.

## Demostración Visual

Aquí puedes ver un ejemplo de las pantallas principales de la aplicación.

<img src="https://i.imgur.com/VFp4x9w.png" style="height:200px;display:inline-block;margin-right:10px"><img src="https://i.imgur.com/uAEycsk.png" style="height:200px;display:inline-block;margin-right:10px"><img src="https://i.imgur.com/njPgDRP.png" style="height:200px;display:inline-block;margin-right:10px">

En tiempo de ejecución, solo una pantalla será visible a la vez.
![Ejemplo de Pantallas de Onboarding](docs/onboarding_screens_example.png)

## Tecnologías Usadas

Este proyecto ha sido desarrollado utilizando las siguientes tecnologías:

* **[Angular](https://angular.dev/)** - v20.0.0 (Framework para el frontend)
* **[TypeScript](https://www.typescriptlang.org/)** - v5.8.2 (Superset de JavaScript)
* **[Node.js](https://nodejs.org/)** (Entorno de ejecución de JavaScript - Requerido para Angular CLI)
* **HTML5**
* **SCSS** (Sass) - Para los estilos CSS

## Instalación

Para configurar y ejecutar este proyecto localmente, sigue los siguientes pasos:

### Prerequisitos

Asegúrate de tener instalado Node.js (que incluye npm) en tu sistema.

* **Node.js**: Descárgalo e instálalo desde [nodejs.org](https://nodejs.org/). Se recomienda una versión LTS.
* **Angular CLI**: Instala el CLI de Angular globalmente si aún no lo tienes:
    ```bash
    npm install -g @angular/cli@20.0.1
    ```

### Pasos de Instalación

1.  **Clona el repositorio:**
    ```bash
    git clone https://github.com/vaniaferrereesteban/S5.git
    ```
2.  **Navega al directorio del proyecto:**
    ```bash
    cd S5
    ```
3.  **Instala las dependencias de Node:**
    ```bash
    npm install
    ```

## Uso

Una vez que hayas instalado las dependencias, puedes ejecutar la aplicación en un servidor de desarrollo local o construirla para producción.

### Ejecutar en Modo de Desarrollo

Para iniciar la aplicación en modo de desarrollo con recarga en vivo:

```bash
ng serve

Abre tu navegador y navega a http://localhost:4200/. La aplicación se recargará automáticamente si realizas cambios en los archivos fuente.
Construir para Producción

Para construir el proyecto para despliegue en un entorno de producción:
Bash

ng build

Los artefactos de construcción se almacenarán en el directorio dist/.
Ejecutar Pruebas

Para ejecutar las pruebas unitarias:
Bash

ng test
```

## Licencia
This project is open-source and available under the MIT License. 

### Contacto
Para cualquier pregunta o comentario, puedes contactar al mantenedor del proyecto:

Vania Ferrer Esteban
GitHub: vaniaferrereesteban
