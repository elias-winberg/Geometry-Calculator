# Geometry-Calculator
A basic geometry calculator.

## Compilation:
To compile the TypeScript files install the development dependencies, and then run `npm run build`.

```bash
$ npm install
$ npm run build
```

## Tests:
To run the tests run `npm run test`.

```bash
$ npm run test
```

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


## Class: Circle
The Circle class represents circles.

### Circle.Circle(radius) 

Creates an instance of Circle.

**Parameters**

**radius**: `number`, the radius

### Circle.area() 

Returns the area of the Circle.

**Returns**: `number`, the area

### Circle.circumference() 

Returns the circumference/perimeter of the Circle.

**Returns**: `number`, the circumference/perimeter

### Circle.perimeter() 

Returns the perimeter of the Circle.

**Returns**: `number`, the perimeter


## Class: Rectangle
The Rectangle class represents rectangles.

### Rectangle.Rectangle(length, width) 

Creates an instance of Rectangle.

**Parameters**

**length**: `number`, the length

**width**: `number`, the width

### Rectangle.area() 

Returns the area of the Rectangle.

**Returns**: `number`, the area

### Rectangle.perimeter() 

Returns the perimeter of the Rectangle.

**Returns**: `number`, the perimeter


## Class: Square
The Square class represents squares.

### Square.Square(length) 

Creates an instance of Square.

**Parameters**

**length**: `number`, the length

### Square.area() 

Returns the area of the Square.

**Returns**: `number`, the area

### Square.perimeter() 

Returns the perimeter of the Square.

**Returns**: `number`, the perimeter


## Class: Triangle
The Triangle class represents triangles.

### Triangle.Triangle(a, b, c) 

Creates an instance of Triangle.

**Parameters**

**a**: `number`, the first side of the Triangle

**b**: `number`, the second side of the Triangle

**c**: `number`, the third side of the Triangle

### Triangle.area() 

Returns the area of the Triangle.
The area is calculated with Heron's formula (https://en.wikipedia.org/wiki/Heron's_formula).

**Returns**: `number`, the area

### Triangle.perimeter() 

Returns the perimeter of the Triangle.

**Returns**: `number`, the perimeter

### Triangle.semiperimeter() 

Returns the semiperimeter of the Triangle.
The semiperimeter is half of the shape's perimeter.

**Returns**: `number`, the semiperimeter


### calculateTotalArea(array) 

Returns the total area of multiple IGeometricShapes.

**Parameters**

**array**: `Array<IGeometricShape>`, the array of IGeometricShapes

**Returns**: `number`, the area
