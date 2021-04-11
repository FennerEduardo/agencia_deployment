//Importar Express
import express from 'express';
import {
    paginaDetalleViaje, 
    paginaInicio, 
    paginaNosotros, 
    paginaTestimoniales, 
    paginaViajes
} from '../controllers/paginasController.js';
import {
    guardarTestimonial
} from '../controllers/testimonialController.js';

// Importar el router de express
const router = express.Router();

//Primera petición a la raíz del proyecto, se pasa el request y el response según corresponda
router.get('/', paginaInicio);
router.get('/nosotros', paginaNosotros );
router.get('/viajes', paginaViajes);
router.get('/viajes/:slug', paginaDetalleViaje);
router.get('/testimoniales', paginaTestimoniales );
router.post('/testimoniales', guardarTestimonial );


export default router;