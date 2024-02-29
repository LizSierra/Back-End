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

router.get('/', empleadoCtrl.getEmpleados);
router.post('/', empleadoCtrl.createEmpleados);
router.put('/:id', empleadoCtrl.editEmpleado);
router.delete('/:id', empleadoCtrl.deleteEmpleado);


/**
 * @swagger
 * /api/empleados:
 *   get:
 *     tags:
 *       - Empleados
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

/**
 * @swagger
 * /api/empleados:
 *   post:
 *     tags:
 *       - Empleados
 *     requestBody:
 *       content:      
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/empleado'
 *     responses:
 *       '200':
 *         description:
 *         content:
 *           application/json:
 *              schema: 
 *                  type: string
 *                  example: {"status": "Empleado guardado"}
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

/**
 * @swagger
 * /api/empleados/{id}:
 *   put:
 *     tags:
 *       - Empleados
 * 
 *     parameters:
 *     - in: path
 *       name: id
 *       type: string
 *       required: true
 * 
 *     requestBody:
 *       content:      
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/empleado'
 *     responses:
 *       '200':
 *         description:
 *         content:
 *           application/json:
 *              schema: 
 *                  type: string
 *                  example: {"status":  "Empleado actualizado"}
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

/**
 * @swagger
 * /api/empleados/{id}:
 *   delete:
 *     tags:
 *       - Empleados
 * 
 *     parameters:
 *     - in: path
 *       name: id
 *       type: string
 *       required: true
 * 
 *     responses:
 *       '200':
 *         description:
 *         content:
 *           application/json:
 *              schema: 
 *                  type: string
 *                  example: {"status":  "Empleado Eliminado"}
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


// Exportamos el router para poder utilizarlo en otros archivos
module.exports = router;