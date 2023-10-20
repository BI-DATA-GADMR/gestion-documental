//uso expres
const express = require('express'); //framework
const morgan = require('morgan'); //para mostrar peticiones
const exphbs = require('express-handlebars'); //plantilla para html

//inicializaciones
const app = express();


//configuraciones
app.set('port', process.env.PORT || 4000);

//middlewars
app.use(morgan('dev')); // para ver el servidor las peticiones


//variables globales


//rutas - url
app.use(require('./routes/index'))

//archivos publicos


//empezamos el servidor
app.listen(app.get('port'), () => {
    console.log("Aplicacion iniciada en puerto: " + app.get('port'))
})