
// Importar los modelos
import { Viaje } from '../models/Viaje.js';
import { Testimoniales } from '../models/Testimoniales.js';


// definir funciones para cada página
const paginaInicio = async (req, res) => {

    // Consultar 3 viajes y 2 testimoniales de la DB a la vez
    const promiseDB = [];
    // se agregan las dos cunsultas a un array para realziar un promise
    promiseDB.push(Viaje.findAll({ limit: 3}));
    promiseDB.push(Testimoniales.findAll({ limit: 3}));
    try {
        // Se hace el promise ejecutando las dos sentencias a la vez y se le pasa el arreglo de las consultas
        const resultado = await Promise.all( promiseDB );

        // Responder
        res.render('inicio', {
            pagina: 'Inicio',
            clase: 'home',
            viajes: resultado[0],
            testimoniales: resultado[1]
        }); //Responder mostrando una vista 
    } catch (error) {
        console.log(error);
    }


}

const paginaNosotros = (req, res) => {
    res.render('nosotros', {
        pagina: 'Nosotros'
    });
}
const paginaViajes = async (req, res) => {
    // consultar DB
    const viajes = await Viaje.findAll();

    res.render('viajes', {
        pagina: 'Próximos Viajes',
        viajes
    });
}

// Muestra un viaje según su Slug
const paginaDetalleViaje = async (req, res) => {
    const { slug } = req.params;
    try {
        const viaje = await Viaje.findOne({ where: { slug } });

        res.render('viaje', {
            pagina: 'Información Viaje',
            viaje
        })
    } catch (error) {
        console.error(error);
    }
}

const paginaTestimoniales = async (req, res) => {
    try {
        // consultar DB
        const testimoniales = await Testimoniales.findAll();
        res.render('testimoniales', {
            pagina: 'Testimoniales',
            testimoniales
        });
    } catch (error) {
        console.log(error);
    }

}

//Exportar cada función en un objeto
export {
    paginaInicio, paginaNosotros, paginaViajes, paginaTestimoniales, paginaDetalleViaje
}