// object and array syntax

// object literal
const point = {x:1, y:2};
console.log(point);

// Accessing properties
console.log(point.x);

// changing properties
point.x = 3;

// nested object literal
const circle = {
  center: point,
  radius: 4
}

// Access subproperties
console.log(circle.center.x);

// Undefined subproperties
console.log(circle.color);
circle.color = 'blue';
console.log(circle);
