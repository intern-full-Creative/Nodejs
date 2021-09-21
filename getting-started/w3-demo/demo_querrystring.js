let http = require("http");
let url = require("url");

http
  .createServer((req, res) => {
    res.writeHead(200, {
      "Content-Type": "text/html",
    });
    let q = url.parse(req.url, true).query;
    let txt = q.year + " " + q.month;
    res.write(txt);
    res.end();
  })
  .listen(8080, () => {
    console.log("Server running");
  });

// // URL Module

// let url = require("url");
// let adr = "http://localhost:8080/default.htm?year=2017&month=february";
// let q = url.parse(adr, true);

// console.log(q.host); // 'localhost:8080'
// console.log(q.pathname); // 'default.htm'
// console.log(q.search); // '?year=2017&month=february'

// let qdata = q.query; // returns an object
// console.log(qdata.month); // february
