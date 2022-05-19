var fs = require('fs');

fs.readFile('./content.md', (err, file) => {
  console.log(file);
});

// sync code
fs.readFileSync('./index.js', (err, file) => {
  console.log(file);
  console.log(`First`);
  console.time(`task1`);
  for (var i = 0; i < 100000; i++) {}
  console.timeEnd(`task1`);
  console.log(`last`);
});

// async code
fs.readFile('./index.js', (err, file) => {
  console.log(file);
  console.log(`First`);
  console.time(`task1`);
  setTimeout(() => {
    console.log(`timout`);
    console.timeEnd(`task1`);
  }, 1000);
  console.time('task2');
  console.log('last');
});
