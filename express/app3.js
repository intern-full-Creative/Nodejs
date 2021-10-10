// Serving html pages
// With css as static

const express = require("express");
const app = express();

app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen(5000, () => {
  console.log("Server running at port 5000");
});
