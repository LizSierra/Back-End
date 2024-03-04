const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    strName: { type: String, required: true },
    strEmail: { type: String, required: true },
    nmbAge: { type: Number, required: true },
    nmbPhone: { type: String, required: true },
    password: { type: String, required: true },
    blnActivo: { type: Boolean, required: true }
});

module.exports = mongoose.model('User', UserSchema);