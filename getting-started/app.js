const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const server = app.listen(3000, () => console.log("server ready"));

process.on("SIGTERM", () => {
  server.close(() => {
    console.log("Process terminated");
  });
});


