/**
* Se coloca el controlador como un objeto y luego se exporta como
* se requiere primero el modelo empleado
*/

const { ObjectId } = require('mongodb');
const Empleado     = require('../models/empleado');
const empleadoCtrl = {};

/**
 * Definir metodos
 */

// Crear empleados

empleadoCtrl.createEmpleados = async (req, res) => {
    const empleado = new Empleado(req.body);
    await empleado.save();
    res.json({status: 'Empleado guardado'});
}

//Obtener los empleados
empleadoCtrl.getEmpleados = async (req, res) => {
    const {id} = req.query;
    const empleados = id? await Empleado.find({_id: new ObjectId(id)}) : await Empleado.find();
    res.json(empleados);
}


//Actualizar empleado
empleadoCtrl.editEmpleado = async (req, res) => {
    const {id} = req.query;
    const empleadoEdit = {
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    }
    await Empleado.findByIdAndUpdate(id, {$set: empleadoEdit}, {new: true});
    res.json({status: 'Empleado actualizado'});
}

//Eliminar empleado
empleadoCtrl.deleteEmpleado = async (req, res) => {
    const {id} = req.query;
    await Empleado.findByIdAndDelete(id);
    res.json({status: 'Empleado Eliminado'});
}

//Expotar modulo
module.exports = empleadoCtrl;