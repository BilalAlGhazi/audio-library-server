const express = require("express");
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

let onlineUsers = 0;
const listeningUsers = {};

// Socket.io setup
io.on('connection', function(socket){
  console.log('a user connected');
  onlineUsers++;
  socket.on('disconnect', function(){
    console.log('user disconnected');
    onlineUsers--;
  });
  socket.on("start listening", function(trackId){
    listeningUsers[`track${trackId}`] = listeningUsers[`track${trackId}`] ? listeningUsers[`track${trackId}`] + 1 : 1;
  });
  socket.on("stop listening", function(trackId){
    listeningUsers[`track${trackId}`] = listeningUsers[`track${trackId}`] ? listeningUsers[`track${trackId}`] - 1 : 0;
  });
});

// HTTP Server Setup
// Configure port
const port = process.env.PORT || 3000;
const trackRoutes = require("./src/routes/track-routes");

// Configure routes
trackRoutes(app);

// Start the server
http.listen(port, function(){
  console.log("Audio player server is listening on port " + port);
});
