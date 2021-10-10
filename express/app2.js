// example of express USE method
// With the help of USE method we can serve static files like css and js

const express = require("express");
const app = express();

app.use("/cssFiles", express.static(__dirname + "/public"));
// can be access via
// http://localhost:5000/cssFiles/style.css

app.listen(5000, () => {
  console.log("Server running at port 5000");
});
