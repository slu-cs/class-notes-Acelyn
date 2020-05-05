const mongoose = require('mongoose');
const connect = require('./db');
const User = require('./models/user');

// Connect to the database
connect();

// Create some users
const lisa = new User({_id: 'ltorrey', name: 'Lisa Torrey'});
const ed = new User({_id: 'eharcourt', name: 'Ed Harcourt'});
const choongsoo = new User({_id: 'clee', name: 'Choong-Soo Lee'});

// Reset the database
mongoose.connection.dropDatabase()
  .then(() => Promise.all([lisa.save(), ed.save(), choongsoo.save()]))
  .then(() => mongoose.connection.close())
  .then(() => console.log('Database is ready.'))
  .catch(error => console.error(error.stack));
