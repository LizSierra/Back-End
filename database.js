const mongoose = require('mongoose');

const URI = 'mongodb+srv://dbuser:dbuser@db-general.8u3nsge.mongodb.net/?retryWrites=true&w=majority&appName=DB-GENERAL';
//const URI = 'mongodb://0.0.0.0:27017/ejemploLis';


mongoose.connect(URI)
  .then(db => console.log('DB is connected'))
  .catch(err => console.error(err));

module.exports = mongoose;


