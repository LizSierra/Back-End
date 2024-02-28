/**
 * Este modulo define las rutas del servidor utilizando Express.
 * Se trata de una REST API para enviar y recibir datos en formato JSON.
 */

const express      = require('express');
const router       = express.Router();
const empleadoCtrl = require('../controllers/empleado.controller');

/**
 * Manejador de ruta para la ruta raiz ("/").
 * Este manejador respondera con un mensaje JSON indicando que la API REST esta funcionando.
 */

/**
 * @swagger
 * /api/empleados:
 *   get:
 *     parameters:
 *     - in: query
 *       name: id
 *       type: string
 *       required: false
 *     responses:
 *       '200':
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *              items:
 *                  anyOf:
 *                     - $ref: '#/components/schemas/empleado'
 * 
 *       '400':
 *         description: Bad request
 * 
 *       '401':
 *         description: Unauthorized 
 * 
 *       '404':
 *         description: Not Found
 *                     
 *       '500':
 *         description: Server Error
 *          
 */
router.get('/', empleadoCtrl.getEmpleados);
router.post('/', empleadoCtrl.createEmpleados);
router.put('/:id', empleadoCtrl.editEmpleado);
router.delete('/:id', empleadoCtrl.deleteEmpleado);

// Exportamos el router para poder utilizarlo en otros archivos
module.exports = router;