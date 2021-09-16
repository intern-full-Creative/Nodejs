var http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200, {
      "Content-Type": "text/html",
    });
    res.end("Hello World to Node!");
  })
  .listen(8080, () => {
    console.log("Server running");
  });
