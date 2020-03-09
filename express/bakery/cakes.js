// Router for cake-related requests
const express = require('express');

// Create the router
const router = express.Router();

//Pretend database collection
const cakes = [
  {id: 'vanilla', flavor:'Vanilla'},
  {id:'chocolate', flavor: 'Chocolate'}
];

// cs-linuxlab-##.stlawu.edu:3000/cakes/
router.get('/', function(request, response) {
  response.send(`
    <h1>Cakes</h1>
    <ul>
      <li><a href="/cakes/vanilla">Vanilla</a></li>
      <li><a href="/cakes/chocolate">Chocolate</a></li>
    </ul>
  `);
});

// cs-linuxlab-##.stlawu.edu:3000/cakes/id
router.get('/:id', function(request, response, next) {
  // Pretend database Lookup
  const cake = cakes.find(cake=>cake.id === request.params.id);

  if (!cake){
    next(); // Pass in this request
  }else{
    response.render('cakes/index', {cakes:cakes});
  }
});

module.exports = router;
