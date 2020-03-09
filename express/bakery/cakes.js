// Router for cake-related requests
const express = require('express');

// Create the router
const router = express.Router();

// Pretend database collection
const cakes = [
  {id: 'vanilla', flavor: 'Vanilla'},
  {id: 'chocolate', flavor: 'Chocolate'}
];

// cs-linuxlab-##.stlawu.edu:3000/cakes/
router.get('/', function(request, response) {
  response.render('cakes/index', {cakes: cakes});
});

// cs-linuxlab-##.stlawu.edu:3000/cakes/id
router.get('/:id', function(request, response, next) {

  // Pretend database lookup
  const cake = cakes.find(cake => cake.id === request.params.id);

  if (!cake) {
    next(); // Pass on this request
  } else {
    response.render('cakes/detail', {cake: cake});
  }
});

module.exports = router;
