// hello world web server
const express = require('express');

// Create the server
const app = express();

// Response to one request,
app.get('/',function(request, response){
  response.send('Hello Lisa');
});

// start the server
app.listen(3000)
console.log('Server is ready.')
