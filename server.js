var app      = require('./server/routes'), // configure our routes
    port     = process.env.PORT || 8080,
    mongoose = require('mongoose'), 
    db       = require('./config/db');

mongoose.connect(db.url);

var server = app.listen(port, function() {
  console.log('Magic happens on the port' + port);
});


