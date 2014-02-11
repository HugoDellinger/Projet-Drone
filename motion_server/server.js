var app = require('express')()
  , server = require('http').createServer(app)
  , io = require('socket.io').listen(server);

server.listen(3001);



io.sockets.on('connection', function (socket) {
  socket.on('message', function (message) {
    console.log(message);
  });
});