/**
* Se coloca el controlador como un objeto y luego se exporta como
* se requiere primero el modelo user
*/

const { ObjectId } = require('mongodb');
const User     = require('../models/user');
const userCtrl = {};

/**
 * Definir metodos
 */

// Crear Usuario

userCtrl.createUsers = async (req, res) => {
    const user = new User(req.body);
    console.log(user);
    await user.save();
    res.json({status: 'Usuario guardado'});
}

//Obtener los Usuarios
userCtrl.getUsers = async (req, res) => {
    const {id} = req.query;
    const users = id? await User.find({_id: new ObjectId(id)}) : await User.find();
    res.json(users);
}

userCtrl.getUserLogin = async (req, res) => {
    // console.log(req);
    // const { strEmail, password } = req.query;
    // const user = { strEmail, password}? await User.find({strEmail: strEmail}, {password: password}): await User.find();
    // console.log(user);
    // res.json(user);
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