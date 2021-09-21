const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to the home page");
  } else if (req.url === "/about") {
    res.end("This is the about page");
  } else {
    res.end(`
        <h1> Oops! Wrong URL </h1>
        <a href="/"> Go back</a>
    `);
  }
});

server.listen(8080);
