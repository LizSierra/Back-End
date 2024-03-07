const express      = require('express');
const router       = express.Router();
const loginCtrl    = require('../controllers/login.controller');

router.post('/', loginCtrl.login);

/**
 * @swagger
 * /api/login:
 *   post:
 *     tags:
 *       - Authorization
 *     requestBody:
 *       content:      
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *              - strEmail
 *              - password
 *             properties:
 *              strEmail:
 *                  type: string
 *              password:
 *                  type: string
 *     responses:
 *       '200':
 *         description:
 *         content:
 *           application/json:
 *              schema: 
 *                  type: object
 *                  example: {token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6IjY1ZThjMTU1OGZmMGZiMTA0MWZiM2JjOSIsInN0ck5hbWUiOiJBbGZvbnNvIiwic3RyRW1haWwiOiJqZXN1cy5hbGZAZ21haWwuY29tIiwibm1iQWdlIjoyNiwibm1iUGhvbmUiOiI0OTc4OTQ1NjEiLCJwYXNzd29yZCI6IiQyYiQxMCRHY2hWYU9nUXpXY2RoM21HbC5UMXYuTWJSMm5XY1hHMWI3Qi52VDJKdGlsTnFUWEZXcGR3MiIsImJsbkFjdGl2byI6dHJ1ZSwiX192IjowfSwiaWF0IjoxNzA5NzUzNTMwLCJleHAiOjE3MDk3NTcxMzB9._eC5NirR75jnnmejW7q3HebCy75gkPnxhC90gu31nPw"} 
 * 
 *       '400':
 *         description: Incorrect password.
 * 
 *       '404':
 *         description: User Not Found
 *                     
 *       '500':
 *         description: Server Error
 *          
 */
module.exports = router;