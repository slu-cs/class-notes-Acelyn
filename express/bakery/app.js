// Bakery world web server
const express = require('express');

// Create the server
const app = express();

// Ignore icon requests
app.get('/favicon.ico', function(request, response){
  response.status(204).end();
})


// Log requests to the console
app.use(function(request,response,next){
  console.log('---------', new Date().toLocaleTimeString())
  console.log(request.method, request.url);
  console.log('Body = ', request.body);
  next();// keep handling this request
});

// Home page
app.get('/', function(request,response){
  response.send(`
    <h1>Bakery</hi>
    <ul>
      <li><a href="/cakes">Cakes</a></li>
      <li><a href="/pies">Pies</a></li>
    </ul
    `);
});

//Routing
app.use('/cakes',require('./cakes.js'))
app.use('/pies',require('./pies.js'))

//app.get('/cakes')

// Handle undefined routes
app.use(function(request,response,next){
  console.log('Replied with 404');
  response.statues(404).end();
})

// handle other errors
app.use(function(error, request,response, next){
  console.error(error.stack);
  response.status(500).send(error.message);
})


// start the server
app.listen(3000)
console.log('Server is ready.')
