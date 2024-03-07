const verifyToken   = require('./verifyToken');

process.middlewares = [verifyToken]; 