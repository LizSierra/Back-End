/**
* Se coloca el controlador como un objeto y luego se exporta como
* se requiere primero el modelo user
*/
const { ObjectId }  = require('mongodb');
const Bcrypt        = require('bcrypt');
const User          = require('../models/user');
const userCtrl      = {};

/**
 * Definir metodos
 */

// Crear Usuario

userCtrl.createUsers = async (req, res) => {
    const user = new User(req.body);
    user.password = Bcrypt.hashSync(req.body.password, 10);
    await user.save();
    res.json({status: 'Usuario guardado'});
}

//Obtener los Usuarios
userCtrl.getUsers = async (req, res) => {
    const {id} = req.query;
    const users = id? await User.find({_id: new ObjectId(id)}, {password: 0}) : await User.find({}, {password: 0});
    res.json(users);
}

//Actualizar Usuario
userCtrl.editUser = async (req, res) => {
    const {id} = req.params;
    let userEdit = new User(req.body); //obligamos que los datos sean solo de tipo del squema.
    userEdit._id = id;
    await User.findByIdAndUpdate(id, {$set: userEdit}, {new: true});
    res.json({status: 'Usuario actualizado'});
}

//Eliminar Usuario
userCtrl.deleteUser = async (req, res) => {
    const {id} = req.params;
    await User.findByIdAndDelete(id);
    res.json({status: 'Usuario Eliminado'});
}

//Expotar modulo
module.exports = userCtrl;