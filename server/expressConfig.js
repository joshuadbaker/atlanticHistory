var bodyParser = require('body-parser'),
    methodOverride = require('method-override');

module.exports = function(app, express) {
  // set the static files location /public/img will be /img for users
  app.use(express.static(__dirname + '/public'));

  // Set the view directory, this enables us to use the .render method inside routes
  app.set('views', __dirname + '/../public/views');

  // parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: true }));

  // parse application/vnd.api+json as json
  // app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 

  // parse application/json
  app.use(bodyParser.json());

  // overrride with the X-HTTP-Method-Override header in the request.  Simulate DELETE/PUT
  app.use(methodOverride('X-HTTP-Method-Override'));
};