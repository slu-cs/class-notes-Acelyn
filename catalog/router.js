const express = require('express');
const courses = require('./controllers/courses');
const sections = require('./controllers/sections');

// Create the router
const router = express.Router();

// Handle course requests
router.get('/courses', courses.index);
router.get('/courses/:id', courses.retrieve);

// Handle section requests
router.get('/sections', sections.index);

// Export the router
module.exports = router;
