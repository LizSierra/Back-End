require('dotenv').config();

const express   = require('express')
const morgan    = require('morgan');
const cors      = require('cors');
const app       = express(); // la constante app tendra ahora todo el funcionamiento del servidor
const { mongoose } = require('./database'); // no se quiere todo el archivo sino la conexion

const swaggerUI = require('swagger-ui-express');
const swaggerSpec = require('./swagger');

/** * Se crea una REST API, es la manera de decirle al servidor que reciba y envie datos  */

// Configuraciones
const port = process.env.PORT || 3000
app.set('port', port);
app.use(morgan('dev')); 
app.use(express.json()); // metodo que ayuda a convertir el codigo para que el servidor pueda entender lo que viene del cliente.
app.use(cors({origin: '*'})); // metodo para comunicar con el cliente

// rutas de nuestro servidor
app.use('/api/empleados',require('./routes/empleado.route'));
app.use('/api/users',require('./routes/user.route'));
app.use('/api/login', require('./routes/login.route'));


// Serve Swagger documentation
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));

// Iniciando el servidor
app.listen(port, () => console.log(`Server online on port: ${port} \nApi Swagger on http://localhost:${port}/api-docs`)); // esta es una mejor manera de configurar el puerto