var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var redis = require('socket.io-redis');

//io.set('transports', ['websocket']);

io.on('connection', function(socket){
  socket.on('chat_message', function(msg){
    io.emit('chat_message', msg);
  });
});

io.adapter(redis({ host: 'localhost', port: 6379 }));

http.listen(3000, function(){
  console.log('listening on *:3000');
});

//app.get('/', function(req, res){
//  res.sendFile(__dirname + '/index.html');
//});

