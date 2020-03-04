// Router for cake-related request
const express = require('express');

// const router
const router = express.Router();

// cs-linuxlab-12.stalwu.edu:3000/cakes/
router.get('/', function(request.response){
  response.send(`
    <h1>Cakes</h1>
    <ul>
      <li><a href="/cakes/vanilla">Vanilla</a></li>
      <li><a href="/cakes/chocolate">Chocolate</a></li>
    </ul>
  `);
});

//cs-linuxlab-12.stalwu.edu:3000/cakes/id
router.get(`/:id`, function(request, response, next){
  if(request.params.id ==='chocolare'){
    response.send('Chocolate cake');
  }else{
    next(); // pass on this request
  }
});

module.exports = router;
