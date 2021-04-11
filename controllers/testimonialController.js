import { Testimoniales } from '../models/Testimoniales.js';

//Función para recibir el testimonial desde el formulario
const guardarTestimonial = async (req, res) => {
    // validar

    const { nombre, correo, mensaje } = req.body;
    const errores = [];

    if(nombre.trim() === ''){        
        errores.push({mensaje: 'El Nombre está vacío'});
    }
    if(correo.trim() === ''){
        errores.push({mensaje: 'El Correo está vacío'});        
    }
    if(mensaje.trim() === ''){
        errores.push({mensaje: 'El Mensaje está vacío'});        
    }
    
    // condicional para enviar errores a la vista
    if(errores.length > 0){
         // consultar DB
         const testimoniales = await Testimoniales.findAll();
        //mostrar la vista con errores
        res.render('testimoniales', {
            pagina: 'Testimoniales',
            errores,
            nombre,
            correo,
            mensaje,
            testimoniales
        });
    } else {
        // almacenarlo en la base de datos
        try {
            await Testimoniales.create({
                nombre,
                correo,
                mensaje
            });
            res.redirect('/testimoniales');
        } catch (error) {
            console.log(error);
        }
    }
}

export {
    guardarTestimonial
}