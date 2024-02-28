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
 * @openapi
 * /api/empleados:
 *   get:
 *     parameters:
 *     - in: query
 *       name: id
 *       type: string
 *       required: false
 #       description: String ID of the user to get.
 *     responses:
 *       200:
 *         description: Returns an Array of employees of Json type.
 */
router.get('/', empleadoCtrl.getEmpleados);
router.post('/', empleadoCtrl.createEmpleados);
router.put('/:id', empleadoCtrl.editEmpleado);
router.delete('/:id', empleadoCtrl.deleteEmpleado);

// Exportamos el router para poder utilizarlo en otros archivos
module.exports = router;