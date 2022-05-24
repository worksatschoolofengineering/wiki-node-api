// Routes / Rutas de la API
// Declaramos ruta de nuestra API
// Empezamos Requiriendo express nuevamente, pero solo la función router
const { Router } = require('express');
const router = Router();
 

// Declaracion Rutas:

//Ruta root


// Personajes
router.get('/personajes', (req, res) => {
    const data =  {
        "id": "1",
        "pelicula": "el paraiso",
        "year": "1995",
        "Author": "Rogger fedrerich",
        "nombre": "pepe",
        "segundo Nombre": "antonio",
        "primer apellido": "rodriguez",
        "segundo apellido": "del jesus"
    };
    res.json(data);
});

// Exportamos este modulo para que pueda ser usado en otras secciones de la App
module.exports = router;

