const swaggerJSDoc = require('swagger-jsdoc');
const empleadoSchema = require('./schemas/empleado.schema');

const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'Back-End API`S',
        version: '1.0.0',
        description: 'Ejemplo de como mandar a llamar las apis de este proyecto.',
    },
    //Schemas
    components: empleadoSchema,
};

const options = {
    swaggerDefinition,
    apis: ['./routes/*.js'], // Path to the API routes in your Node.js application
};

const swaggerSpec = swaggerJSDoc(options);
module.exports = swaggerSpec;