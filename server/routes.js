var express = require('express'),
    app = express(),
    router = require('./routes/index');

// Load Express Configuration
require('./expressConfig')(app, express);

app.get('/', function(req, res) {
  res.sendfile('index.html', {root: app.settings.views});
});

module.exports = app;