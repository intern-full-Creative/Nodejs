const express = require("express");
const app = express();

const bodyParser = require("body-parser");

const urlEncodedParser = bodyParser.urlencoded({ extended: false });

app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/about", (req, res) => {
  res.send("This is the about page");
});

app.post("/", urlEncodedParser, (req, res) => {
  res.send(req.body);
});

app.listen(5000, () => {
  console.log("Server running at port 5000");
});
