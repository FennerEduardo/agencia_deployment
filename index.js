//Configurar el servidor de express sintaxis de common.js
// const express = require('express');
// configurar el servidor importando express con la sintaxis de import
import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';
import dotenv from 'dotenv';

dotenv.config({path:"variables.env"});

const app = express();

//Conectar con la base de datos
db.authenticate()
    .then(() => console.log('Base de datos conectada'))
    .catch( error => console.error(error));


// Definir host
const host = process.env.HOST || '0.0.0.0';
//Definir puerto
const port = process.env.PORT || 4000;

//Habilitar el motor de plantillas PUG
app.set('view engine', 'pug');

//Obtener el año actual - next pasa al siguiente middleware
app.use( (req, res, next) => {
   const year = new Date();

   res.locals.actualYear = year.getFullYear();
   res.locals.nombreSitio = 'Agencia de Viajes';

    return next();
});

// Agregar body parser para leer los datos del formulario
app.use(express.urlencoded({extended: true}));

// Definir la carpeta publica
app.use(express.static('public'));

//Agregar el Router
app.use('/', router);


app.listen(port, host, () => {
    console.log(`El servidor ${host} está funcionando en el puerto ${port}`);
})