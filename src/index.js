//uso de express
const express = require('express'); //framework
const morgan = require('morgan'); //para mostrar peticiones
const {engine}  = require('express-handlebars'); //plantilla para html
const path = require('path');//para moverme entre las direcciones

//inicializaciones
const app = express();


//configuraciones
app.set('port', process.env.PORT || 4000); //asigno el puerto
app.set('views', path.join(__dirname, 'views')) //me devuelve la ubicacion de la carpeta views
app.engine('.hbs', engine({ //'.hbs' es el nombre del engine
    defaultLayout: 'main', //nombre de la plantilla principal 
    layoutsDir: path.join(app.get('views'), 'layouts'), //une la carpeta views con layout
    partialsDir: path.join(app.get('views'), 'partials'), //une la carpeta views con partials
    extname: 'hbs', //nombre la extension del archivo (puede ser handlebars)
    helpers: require('./lib/handlebars') //para usar las funciones de handlebars, indico donde las va a encontrar
}));//con esto el motor esta configurado
app.set('view engine', '.hbs'); //asigno el motor


//middlewars
app.use(morgan('dev')); // para ver el servidor las peticiones
//app.use(express.urlencoded({ extended: false })); //para aceptar datos desde el formularios
app.use(express.json()); //para manejar json


//variables globales
app.use((req, res, next) => { //uso peticiones, respuestas y continuo con el proceso
    next();
})

//rutas - url - uso las rutas de los archivos de la carpeta routes
app.use(require('./routes'));
app.use(require('./routes/autentication'));
app.use('/process',require('./routes/process')); //agrego un prefijo para la url



//archivos publicos
app.use(express.static(path.join(__dirname, 'public'))); 


//empezamos el servidor
app.listen(app.get('port'), () => {
    console.log("Aplicacion iniciada en puerto: " + app.get('port'))
})