const mongoose = require('mongoose');

const URI = 'mongodb+srv://dbuser:dbuser@db-general.8u3nsge.mongodb.net/?retryWrites=true&w=majority&appName=DB-GENERAL';

mongoose.connect(URI)
  .then(db => console.log('DB is connected'))
  .catch(err => console.error(err));

module.exports = mongoose;


