/**
 * Este modulo define las rutas del servidor utilizando Express.
 * Se trata de una REST API para enviar y recibir datos en formato JSON.
 */

const express      = require('express');
const router       = express.Router();
const userCtrl     = require('../controllers/user.controller');

/**
 * Manejador de ruta para la ruta raiz ("/").
 * Este manejador respondera con un mensaje JSON indicando que la API REST esta funcionando.
 */

router.post('/', userCtrl.createUsers);

router.use( process.middlewares );
router.get('/', userCtrl.getUsers);
router.put('/:id', userCtrl.editUser);
router.delete('/:id', userCtrl.deleteUser);

/**
 * @swagger
 * /api/users:
 *   get:
 *     tags:
 *       - Users
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
 *                     - $ref: '#/components/schemas/user'
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
 *     security:
 *      - ApiKeyAuth: []  
 *          
 */

/**
 * @swagger
 * /api/users:
 *   post:
 *     tags:
 *       - Users
 *     requestBody:
 *       content:      
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/user'
 *     responses:
 *       '200':
 *         description:
 *         content:
 *           application/json:
 *              schema: 
 *                  type: string
 *                  example: {"status": "Usuario guardado"}
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
 * /api/users/{id}:
 *   put:
 *     tags:
 *       - Users
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
 *             $ref: '#/components/schemas/user'
 *     responses:
 *       '200':
 *         description:
 *         content:
 *           application/json:
 *              schema: 
 *                  type: string
 *                  example: {"status":  "Usuario actualizado"}
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
 *     security:
 *      - ApiKeyAuth: []  
 *          
 */

/**
 * @swagger
 * /api/users/{id}:
 *   delete:
 *     tags:
 *       - Users
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
 *                  example: {"status":  "Usuario Eliminado"}
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
 *     security:
 *      - ApiKeyAuth: []  
 *          
 */


// Exportamos el router para poder utilizarlo en otros archivos
module.exports = router;