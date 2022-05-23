var http = require('http');

var server = http.createServer(handleRequest);

function handleRequest(req, res) {
  res.statusCode = 201;
  res.setHeader('content-type', 'text/html');
  res.write('<h1>Hello World</h1>');
  res.end();
}

server.listen(4444, () => {
  console.log('server listening on port 4444');
});
