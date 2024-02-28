/**
* Se coloca el controlador como un objeto y luego se exporta como
* se requiere primero el modelo empleado
*/

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
    const empleados = await Empleado.find();
    console.log("empleados",empleados);
    res.json(empleados);
}

//Obtener un empleado
empleadoCtrl.getEmpleado = async (req, res) => {
    const empleado = await Empleado.findById(req.params.id);
    res.json(empleado);
}

//Actualizar empleado
empleadoCtrl.editEmpleado = async (req, res) => {
    const {id} = req.params;
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
    await Empleado.findByIdAndDelete(req.params.id);
    res.json({status: 'Empleado Eliminado'});
}

//Expotar modulo
module.exports = empleadoCtrl;