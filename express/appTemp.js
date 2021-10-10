// using POST method to validate form data

const express = require("express");
const app = express();

const bodyParser = require("body-parser");

const urlEncodedParser = bodyParser.urlencoded({ extended: false });

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", urlEncodedParser, (req, res) => {
  res.send(req.body);
});

app.listen(5000, () => {
  console.log("Server running at port 5000");
});
