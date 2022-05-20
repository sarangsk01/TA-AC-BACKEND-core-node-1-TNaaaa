function area(length, width) {
  return length * width;
}

console.log(`The area of your square is ` + area);

function areaRectangle(width, length) {
  let area = width * length;
  return area;
}

console.log('The area of your rectangle is ' + areaRectangle);

function calculateAreaOfCircle(myRadius) {
  var area = myRadius * myRadius * Math.PI;
  return area;
}

console.log('The area of your circle is ' + calculateAreaOfCircle);

module.exports = {
  area: area,
  areaRectangle: areaRectangle,
  calculateAreaOfCircle: calculateAreaOfCircle,
};
