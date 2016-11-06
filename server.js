var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

io.on('connection', function(socket) {
    console.log("we have a new connecion");
    socket.on("new-message", function(msg) {
        console.log(msg);
        io.emit("recieve-message", msg);
    });

});

http.listen('3000', function () {
    console.log("server listens port 3000");
});