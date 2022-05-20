console.log('Welcome to Nodejs');

var os = require('os');
const { uptime } = require('process');
var cpus = os.cpus().length;
var freeM = os.freemem();
var { readFile, unlink } = require('fs');

console.log(freeM, cpus, uptime, os.version, readFile);

var buffer = require(Buffer.alloc(12));
buffer.toString();

// blocking code
console.log(`First`);
console.time(`task1`);
for (var i = 0; i < 100000; i++) {}
console.timeEnd(`task1`);
console.log(`last`);

// non blocking code
console.log(`First`);
console.time(`task1`);
setTimeout(() => {
  console.log(`timout`);
  console.timeEnd(`task1`);
}, 1000);
console.time(task2);
console.log(last);
