const Bcrypt         = require('bcrypt');
const User           = require('../models/user');
const loginCtrl      = {};
const tokenGenerator = require('../libraries/tokenGenerator');

loginCtrl.login = async(req, res) => {

    const {strEmail, password} = req.body;

    const user = await User.findOne({strEmail});
    if(!user) return res.status(404).send("User Not Found.");

    const pwd = await Bcrypt.compare(password, user.password);
    if(!pwd) return res.status(400).send("Incorrect password.");

    //limpiamos los valores para que no los agregue en el token.
    user.password = undefined;
    user.__v = undefined;
    
    tokenGenerator(user).then(token => res.status(200).send({token}));
    
}

module.exports = loginCtrl;