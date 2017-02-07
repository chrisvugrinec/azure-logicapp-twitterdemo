var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var redis = require("redis");
var serveStatic = require('serve-static');

var subscriber= redis.createClient(6380,process.env.REDIS_URL, {auth_pass:process.env.REDIS_PASSWORD, tls: {servername: process.env.REDIS_URL}});

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});


subscriber.subscribe(process.env.REDIS_TOPIC);
subscriber.on("message", function(channel, message) {
   io.emit(process.env.REDIS_TOPIC, message);
});

http.listen(8080, function(){
  app.use(serveStatic(__dirname, {'index': ['images/logo-solvinity.png']}));
  app.use(serveStatic(__dirname, {'index': ['scripts/jquery-1.10.2.min.js']}));
  console.log('REDIS URL : '+process.env.REDIS_URL);
  console.log('REDIS TOPIC: '+process.env.REDIS_TOPIC);
});
