const fs = require("fs");
const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/home") {
    // res.write("Hellow world from nodejs shola");
    fs.readFile("home.html", function (err, data) {
      res.writeHead(200, { "content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  } else if (req.url === "/about") {
    fs.readFile("about.html", function (err, data) {
      res.writeHead(200, { "content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  } else if (req.url === "/contact") {
    fs.readFile("contact.html", function (err, data) {
      res.writeHead(200, { "content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  } else {
    fs.readFile("home.html", function (err, data) {
      res.writeHead(200, { "content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  }
});

server.listen("3000");
