const express = require('express');
const users = require('./controllers/users');

// Create the router
const router = express.Router();

// Handle home-page requests
router.get('/', function(request, response) {
  response.render('index');
});

// Handle login requests
router.post('/login', users.login);

// Handle logout requests
router.get('/logout', function(request, response) {
  request.session.user = undefined;
  response.redirect('/');
});

// Export the router
module.exports = router;
