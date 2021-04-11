import Sequelize from 'sequelize';
import db from '../config/db.js';

//Definir la tabla y su configuracion con las columnas a consultar en la base de datos en el objeto
export const Testimoniales = db.define('testimoniales', {
    nombre: {
        type: Sequelize.STRING
    },
    correo: {
        type: Sequelize.STRING
    },
    mensaje: {
        type: Sequelize.STRING
    },    
});