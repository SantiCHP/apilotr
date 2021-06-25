"use strict";

//1.- Crear un array con objetos que represente una colección de elementos a elegir por el usuario. Deberá guardarse en un fichero externo en formato JSON (los datos, no el fichero)
//Creado en fichero peliculas.json
// 2.- Cargar el contenido del fichero en JS y mostrar los datos en una lista.
fetch('./peliculas.json').then(function (res) {
  return res.json();
}).then(function (data) {
  return console.log(data);
})["catch"](function (err) {
  return console.log('Error', err);
}); // 3.- Buscar una API de elección personal y leerse la parte de la documentación necesaria para poder trabajar con ella (si es sencilla. Si no, buscar otra API)
// Realizar operaciones CRUD con los datos. Deben mostrarse en pantalla de alguna forma los resultados de las operaciones ( las respuestas del servidor), usando HTML y CSS
//GET

fetch('https://jsonplaceholder.typicode.com/users').then(function (res) {
  return res.json();
}).then(function (data) {
  return console.log(data);
})["catch"](function (err) {
  return console.log('Error', err);
}); //POST

fetch('https://jsonplaceholder.typicode.com/posts/3/comments', {
  method: 'POST',
  headers: {
    'Content-type': 'application/json'
  },
  body: JSON.stringify({
    "name": "debitis magnam hic odit aut ullam nostrum tenetur",
    "email": "Maynard.Hodkiewicz@roberta.com",
    "body": "nihil ut voluptates blanditiis autem odio dicta rerum\nquisquam saepe et est\nsunt quasi nemo laudantium deserunt\nmolestias tempora quo quia"
  })
}).then(function (res) {
  return res.json();
}).then(function (data) {
  return console.log(data);
})["catch"](function (err) {
  return console.log('Error', err);
}); //PUT

fetch('https://jsonplaceholder.typicode.com/posts/3', {
  method: 'PUT',
  headers: {
    'Content-type': 'application/json'
  },
  body: JSON.stringify({
    "title": "Esto es un nuevo comentario",
    "body": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti vero autem dolorem labore, sed rem soluta eveniet natus, voluptatem quisquam adipisci laboriosam odit deserunt inventore, itaque culpa ducimus animi obcaecati.\nNostrum modi optio ea aut numquam quod debitis, voluptas repellendus necessitatibus saepe at officia, enim consequuntur laudantium blanditiis quo voluptatem facere eaque alias nemo veniam omnis. Consequuntur, saepe magnam! Accusantium.\nAliquid quis voluptatum recusandae quaerat cumque at sunt veritatis, aperiam sequi doloremque quia aut sed molestiae architecto! Vel, corrupti. Qui cum ipsa facere odio excepturi magni! Dolor atque vel adipisci!"
  })
}).then(function (res) {
  return res.json();
}).then(function (data) {
  return console.log(data);
})["catch"](function (err) {
  return console.log('Error', err);
}); //DELETE

fetch('https://jsonplaceholder.typicode.com/posts/3', {
  method: 'DELETE',
  headers: {
    'Content-type': 'application/json'
  }
}).then(function (res) {
  return console.log(res);
})["catch"](function (err) {
  return console.log('Error', err);
}); // 4.- Repetir ejercicio 3 con otra API diferente.
// --> Revisar archivos pelis.*