// Importamos las librerias instaladas
const express = require('express');
// Requerimos las librerias instaladas
const app = express();
const morgan = require('morgan');


// Settings/Configuraciones
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2)

// Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());


// Routes / Rutas de la API
// Enroutador del modulo

// personajes
app.use(require('./routes/route')); 
// users
app.use('/api/users', require('./routes/users'));





// Levantamos servidor un servidor de express
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});


/*
This is the better way to make comments in multiples
lines of your code.
for example caption this...

*/