var http = require('http');
var fs = require('fs');
// var port = 3000;

var server = http.createServer(handleRequest);

function handleRequest(req, res) {
  if (req.method === 'GET' && req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    fs.createReadStream('./index.html').pipe(res);
  } else if (req.method === 'GET' && req.url === '/about') {
    res.setHeader('Content-Type', 'text/html');
    fs.createReadStream('./about.html').pipe(res);
  } else if (req.url.split('.').pop() === 'css') {
    // set header for css file
    res.setHeader('Content-Type', 'text/css');
    // read css file and send it in response
    fs.readFile('./assets/stylesheets/' + req.url, (err, content) => {
      if (err) return console.log(err);
      res.end(content);
    });
  } else if (req.url.split('.').pop() === 'js') {
    // set header for js file
    res.setHeader('Content-Type', 'text/js');
    // read js file and send it in response
    fs.readFile('./assets/js/' + req.url, (err, content) => {
      if (err) return console.log(err);
      res.end(content);
    });
  }
}

server.listen(3000, () => {
  console.log('server listening on port 3000');
});
