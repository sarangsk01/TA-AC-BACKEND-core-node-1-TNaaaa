var http = require('http');
var server = http.createServer(handleRequest);
var url = require('url');

function handleRequest(req, res) {
  var parsedUrl = url.parse(req.url);
  var pathname = parsedUrl.pathname;
  console.log(req.method, req.url, parsedUrl);
  if (req.method === 'GET' && pathname === '/') {
    res.setHeader('Content-Type', 'text/plain');
    res.write('Welcome to Home Page');
    res.end();
  } else if (req.method === 'GET' && pathname === '/about') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<h2>this is all about NodeJS</h2>');
    res.end();
  } else if (req.method === 'POST' && pathname === '/about') {
    res.setHeader('Content-Type', 'text/json');
    res.write('{message: this is a post request}');
    res.end();
  }
}

server.listen(5000, () => {
  console.log('Server listening on post 5000');
});
