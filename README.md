# Geometry-Calculator
A basic geometry calculator.

## Example:
```js
"use strict";

const assert = require("assert");

const {
    calculateTotalArea,
    Rectangle,
    Triangle
} = require("geometry-calculator");

let rectangle = new Rectangle(10, 20);

assert(rectangle.area() == 200);

assert(rectangle.perimeter() == 60);

let triangle = new Triangle(3, 4, 5);

assert(triangle.area() == 6);

assert(triangle.perimeter() == 12);

assert(calculateTotalArea([
    rectangle,
    triangle
]) == 206);
```
