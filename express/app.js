const express = require("express");
const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
  res.send("Hello, this is the home page");
});

app.post("/user", (req, res) => {
  res.send("Handled POST request");
});

app.delete("/remove", (req, res) => {
  res.send("Handled DELETE response");
});

app.listen(PORT, (err) => {
  if (err) {
    console.log("Error in server setup");
  }
  console.log("Server running on port " + PORT);
});
