var http = require('http');
var server = http.createServer(handleRequest);
var fs = require('fs');

function handleRequest(req, res) {
  if (req.method === 'GET' && req.url === '/') {
    res.write('Welcome to Index Page');
    res.end();
  } else if (req.method === 'GET' && req.url === '/node') {
    res.setHeader('Content-Type', 'text/html');
    fs.readFile('./node.html', (err, content) => {
      if (err) console.log(err);
      console.log(content);
      res.end(content);
    });
  } else if (req.method === 'GET' && req.url === '/node') {
    res.setHeader('Content-Type', 'text/html');
    fs.createReadStream('./node.html').pipe(res);
  }
}

server.listen(5555, () => {
  console.log('Server listening on port 5555');
});
