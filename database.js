const mongoose = require('mongoose');

const URI = process.env.MONGOURI;

mongoose.connect(URI)
  .then(db => console.log('DB is connected'))
  .catch(err => console.error(err));

module.exports = mongoose;


