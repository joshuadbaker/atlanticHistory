var express = require('express'),
    router = require('./blog'),
    Blog = require('../models/blog');
// router.use('/blog', require('./blog'));
// Test route for the API
router.get('/', function(req, res) {
  res.json({ message: "hooray! Welcome to Ian's API!" });
});


module.exports = router;