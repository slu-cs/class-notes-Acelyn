// hello world web server
const express = require('express');

// Create the server
const app = express();

// Response to one request,
// cs-linuxlab-13.stlawu.edu:3000
app.get('/',function(request, response){
  response.send('Hello Ruoya');
});

// cs-linuxlab-13.stlawu.edu:3000/foo
app.get('/foo',function(request, response){
  response.send('Hello foo');
});

// cs-linuxlab-13.stlawu.edu:3000/foo/bar
app.get('/foo.bar',function(request, response){
  response.send('Hello bar');
});

// cs-linuxlab-13.stlawu.edu:3000/zap/z(for any z)
app.get('/zap/:z',function(request, response){
  response.send(`Hello ${request.params.z}`);
});

// cs-linuxlab-13.stlawu.edu:3000/zap?x=X&y=Y
app.get('/zap',function(request, response){
  response.send(`Hello zap with ${request.query.y} and ${request.query.y}`);
});


// start the server
app.listen(3000)
console.log('Server is ready.')
