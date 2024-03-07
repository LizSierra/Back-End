const jwt   = require('jsonwebtoken');

module.exports = async(req, res, next) => {
   try {

      const { authorization } = req.headers; 

      if (!authorization) return res.status(401).send('User Unauthorized');
      jwt.verify(authorization, process.env.TOKEN_SECRET);

      next();
      
   } catch (error) {
      return res.status(401).send('Token has expired.')
   }
   
};