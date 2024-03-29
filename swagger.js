const swaggerJSDoc = require('swagger-jsdoc');
const {empleado, user} = require('./schemas/index');

const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'Back-End API`S',
        version: '1.0.0',
        description: 'Ejemplo de como mandar a llamar las apis de este proyecto.',
    },
    //Schemas
    components: {
        securitySchemes:{
            ApiKeyAuth: {
                type: "apiKey",
                in: "header",
                name: "Authorization"
            }
        },
        schemas: {
            empleado,
            user
        }
    }
};

const options = {
    swaggerDefinition,
    apis: ['./routes/*.js'], // Path to the API routes in your Node.js application
};

const swaggerSpec = swaggerJSDoc(options);
module.exports = swaggerSpec;