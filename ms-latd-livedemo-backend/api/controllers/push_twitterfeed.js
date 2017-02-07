'use strict';
var util = require('util');
var redis = require("redis");
var subscriber= redis.createClient(6380,process.env.REDIS_URL, {auth_pass:process.env.REDIS_PASSWORD, tls: {servername: process.env.REDIS_URL}});

module.exports = {
  twitterfeed: twitterfeed 
};

function twitterfeed(req, res) {
  // variables defined in the Swagger document can be referenced using req.swagger.params.{parameter_name}
  console.log(req.body);
  var tuser = req.body.user || 'chris';
  var tmessage = req.body.message || 'hello world';
  var tscore = req.body.score || '1';


  var json_message = {
      "user": tuser,
      "message": tmessage,
      "score": tscore
   }
   subscriber.publish(process.env.REDIS_TOPIC, JSON.stringify(json_message));
   res.json(tmessage);
};
