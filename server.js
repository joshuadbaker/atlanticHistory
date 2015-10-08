// server.js
// var express        = require('express');
// var app            = express();
// var bodyParser     = require('body-parser');

var app      = require('./server/routes'), // configure our routes
    port     = process.env.PORT || 8080,
    mongoose = require('mongoose'), 
    db       = require('./config/db');

mongoose.connect(db.url);

var server = app.listen(port, function() {
  console.log('Magic happens on the port' + port);
});

// Registers the routes----------------
// all routes will be prefixed with/api
app.use('/api', require('./server/routes/index'));
