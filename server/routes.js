var express = require('express'),
    app = express(),
    router = require('./routes/index');

// Load Express Configuration
require('./expressConfig')(app, express);


app.get('*', function(req, res) {
  res.sendfile('public/index.html');
});

module.exports = app;