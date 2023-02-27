Este proyecto consiste en una aplicación web que consume la PokeAPI para obtener información sobre todos los pokemones que no evolucionan, su peso y su imagen. La aplicación está desarrollada en React y utiliza la librería Axios para realizar las consultas a la API.

Supuestos

Se consideraron los siguientes supuestos para resolver el problema:

1. La PokeAPI proporciona información completa y actualizada sobre los pokemones.
2. Los pokemones que no evolucionan son aquellos que no tienen evoluciones registradas en la PokeAPI.
3. El peso de los pokemones se encuentra en la propiedad "weight" de los objetos de la PokeAPI.
4. La imagen de cada pokemon se encuentra en la propiedad "sprites.front_default" de los objetos de la PokeAPI.

Requisitos

Para ejecutar la aplicación es necesario tener instalado Node.js y npm.

Instalación

Para instalar el proyecto, sigue los siguientes pasos:

Clona el repositorio en tu máquina local:

git clone https://github.com/sthannais/Pokemon-block-with-apis.git

Ingresa a la carpeta del proyecto:

cd my-app

Instala las dependencias
npm install

Para ejecutar la aplicación, utiliza el siguiente comando:
npm start 
