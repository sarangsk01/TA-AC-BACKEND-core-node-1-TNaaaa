// 1
var http = require('http');
var server = http.createServer(handleRequest);

function handleRequest(req, res) {
  console.log(req, res);
  res.end();
}

server.listen(5000, () => {
  console.log('Server listening on port 5000');
});

// 2

function handleRequest(req, res) {
  res.write('My first server in NodeJS');
  res.end();
}

server.listen(5100, () => {
  console.log('Server listening on port 5100');
});

// 3

function handleRequest(req, res) {
  console.log(req.headers);
  res.end('Hello John');
}

server.listen(5555, () => {
  console.log('Server listening on port 5555');
});

// 4

function handleRequest(req, res) {
  console.log(req.url, req.method);
  res.setHeader('Content-Type', 'text/plain');
  res.end('Welcome to nodejs');
}

server.listen(5566, () => {
  console.log('Server listening on port 5566');
});

// 5

function handleRequest(req, res) {
  res.end(req.headers);
}

server.listen(7000, () => {
  console.log('Server listening on port 7000');
});

// 6

function handleRequest(req, res) {
  res.statusCode = 202;
}

server.listen(3333, () => {
  console.log('Server listening on port 3333');
});

// 7

function handleRequest(req, res) {
  res.setHeader('Content-Type', 'text/html');
  res.end('<h3>Welcome to altcampus</h3>');
}

server.listen(8000, () => {
  console.log('Server listening on port 8000');
});

// 8

function handleRequest(req, res) {
  res.writeHeader(202, { 'Content-Type': 'text/html' });
  res.end('<h3>Welcome to altcampus</h3>');
}

server.listen(8000, () => {
  console.log('Server listening on port 8000');
});

// 9

function handleRequest(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.end({ success: true, message: 'Welcome to Nodejs' });
}

server.listen(8888, () => {
  console.log('Server listening on port 8888');
});

// 10

function handleRequest(req, res) {
  console.log(req.method);
  if (req.method === 'GET' && req.url === '/') {
    res.writeHeade(202, { 'Content-Type': 'text/html' });
    res.end('<h2>posted for first time</h2>');
  }
}

server.listen(5050, () => {
  console.log('Server listening on port 5050');
});

// 11

function handleRequest(req, res) {
  if (req.method === 'GET' && req.url === '/') {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Sarang Kulkarni');
  } else if (req.method === 'GET' && req.url === '/about') {
    res.setHeader('Content-Type', 'text/html');
    res.end('<h2>Sarang Kulkarni</h2>');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h2>Page Not Found</h2>');
  }
}

server.listen(2345, () => {
  console.log('Server listening on port 2345');
});

// 12
var fs = require('fs');

function handleRequest(req, res) {
  if (req.method === 'GET' && req.url === '/users') {
    res.setHeader('Content-Type', 'text/html');
    fs.readFile('./index.html', (err, content) => {
      if (err) console.log(err);
      console.log(content);
      res.end(content);
    });
  } else if (req.method === 'POST' && req.url === '/users') {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Posted for the second time');
  }
}

server.listen(2345, () => {
  console.log('Server listening on port 2345');
});

// 13
var url = require('url');

function handleRequest(req, res) {
  var parsedUrl = url.parse(req.url);
  var pathname = parsedUrl.pathname;
  res.setHeader('Content-Type', 'application/json');
  res.end('{email:nodeserver@gmail.com}');
}

server.listen(2345, () => {
  console.log('Server listening on port 2345');
});
