var http = require("http");
var dt = require("./myFirstModule");

http
  .createServer((req, res) => {
    res.writeHead(200, {
      "Content-Type": "text/html",
    });
    res.write("The date and time are currently: " + dt.myDateTime());
  })
  .listen(8080, () => {
    console.log("Server running");
  });
