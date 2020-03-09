// Bakery web server
const express = require('express');

// Create the server
const app = express();

// Use a view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// Ignore icon requests
app.get('/favicon.ico', function(request, response) {
  response.status(204).end();
});

// Log requests to the console
app.use(function(request, response, next) {
  console.log('---------------------', new Date().toLocaleTimeString());
  console.log(request.method, request.url);
  console.log('Body =', request.body);
  next(); // Keep handling this request
});

// cs-linuxlab-##.stlawu.edu:3000/
app.get('/', function(request, response) {
  response.render('index');
});

// Routing
app.use('/cakes', require('./cakes.js'));
app.use('/pies', require('./pies.js'));

// Handle undefined routes
app.use(function(request, response, next) {
  console.log('Replied with 404');
  response.status(404).end();
});

// Handle other errors
app.use(function(error, request, response, next) {
  console.error(error.stack);
  response.status(500).send(error.message);
});

// Start the server
app.listen(3000);
console.log('Server is ready.');
