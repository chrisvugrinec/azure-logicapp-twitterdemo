'use strict';

var SwaggerExpress = require('swagger-express-mw');
var app = require('express')();
var fs = require('fs');
var cors = require('cors');
module.exports = app; // for testing

var config = {
  appRoot: __dirname // required config
};


var corsOptions = {
    credentials: true,
    origin: function(origin,callback) {
        if(origin===undefined) {
            callback(null,false);
        } else {
            var match = origin.match("^(.*)?.azure.com(\:[0-9]+)?");
            var allowed = (match!==null && match.length > 0);
            callback(null,allowed);
        }
    }
};



SwaggerExpress.create(config, function(err, swaggerExpress) {

  if (err) { throw err; }

  // install middleware
  swaggerExpress.register(app);

  var port = process.env.PORT || 3000;
  app.listen(port);
  app.use(cors(corsOptions));

  if (swaggerExpress.runner.swagger.paths['/twitterfeed']) {
    console.log('starting server');
  }
});
