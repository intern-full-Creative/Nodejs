// example of express GET method

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("This is the home page");
});

app.get("/about", (req, res) => {
  res.send("This is the about page");
});

app.listen(5000, () => {
  console.log("Server running at port 5000");
});
