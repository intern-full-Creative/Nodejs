const express = require("express");
const socket = require("socket.io");

const app = express();

const server = app.listen(8080, () => {
  console.log("Server Listening on port 8080");
});

app.use(express.static("public"));

const io = socket(server);

io.on("connection", (socket) => {
  socket.on("chat message", (data) => {
    io.emit("chat message", data);
    socket.on("typing", (user) => {
      socket.broadcast.emit("typing", user);
    });
  });
});
