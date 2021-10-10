// Using GET request querry and converting it into JSON object

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(JSON.stringify(req.query));
});

// http://localhost:5000/?firstName=jith&lastName=james
// will return => { "firstName": "jith", "lastName": "james" }

app.listen(5000, () => {
  console.log("Server running at port 5000");
});
