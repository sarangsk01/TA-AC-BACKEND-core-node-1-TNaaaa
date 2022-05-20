// http protocol
const { url } = require('inspector');
var { parse } = require('url');
var parsedUrl = url.parse(
  'https://airindia.com/fares/calculate?from=delhi&to=detroit',
  true
);
console.log(parsedUrl.query);
console.log(parsedUrl.pathname);
console.log(parsedUrl.protocol);
