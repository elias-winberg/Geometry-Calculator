"use strict";

/**
 * The IGeometricShape interface provides definitions for objects that represent some form of geometric shape.
 * @export
 * @interface IGeometricShape
 */
export interface IGeometricShape {
    /**
     * Returns the area of the IGeometricShape.
     * @returns {number} the area
     * @memberOf IGeometricShape
     */
    area(): number;

    /**
     * Returns the perimeter of the IGeometricShape.
     * @returns {number} the perimeter
     * @memberOf IGeometricShape
     */
    perimeter(): number;
}

/**
 * The Circle class represents circles.
 * @export
 * @class Circle
 * @implements {IGeometricShape}
 */
export class Circle implements IGeometricShape {
    /**
     * The radius of the Circle.
     * @private
     * @type {number}
     * @memberOf Circle
     */
    private _radius: number;

    /**
     * Returns the radius of the Circle.
     * @type {number} the radius
     * @memberOf Circle
     */
    get radius(): number {
        return this._radius;
    }

    /**
     * Sets the radius of the Circle.
     * @param {number} the radius
     * @memberOf Circle
     */
    set radius(radius: number) {
        this._radius = radius;
    }

    /**
     * Creates an instance of Circle.
     * @param {number} radius - the radius
     * @memberOf Circle
     */
    public constructor(radius: number) {
        this._radius = radius;
    }

    /**
     * Returns the area of the Circle.
     * @returns {number} the area
     * @memberOf Circle
     */
    public area() {
        return Math.PI * Math.pow(this._radius, 2);
    }

    /**
     * Returns the circumference/perimeter of the Circle.
     * @returns {number} the circumference/perimeter
     * @memberOf Circle
     */
    public circumference() {
        return this.perimeter();
    }

    /**
     * Returns the perimeter of the Circle.
     * @returns {number} the perimeter
     * @memberOf Circle
     */
    public perimeter() {
        return 2 * Math.PI * this._radius;
    }
}

/**
 * The Rectangle class represents rectangles.
 * @export
 * @class Rectangle
 * @implements {IGeometricShape}
 */
export class Rectangle implements IGeometricShape {
    /**
     * The length of the Rectangle.
     * @private
     * @type {number}
     * @memberOf Rectangle
     */
    private _length: number;

    /**
     * Returns the length of the Rectangle.
     * @type {number} the length
     * @memberOf Rectangle
     */
    get length(): number {
        return this._length;
    }

    /**
     * Sets the length of the Rectangle.
     * @param {number} length - the length
     * @memberOf Rectangle
     */
    set length(length: number) {
        this._length = length;
    }

    /**
     * The width of the Rectangle.
     * @private
     * @type {number}
     * @memberOf Rectangle
     */
    private _width: number;

    /**
     * Returns the width of the Rectangle.
     * @type {number} the width
     * @memberOf Rectangle
     */
    get width(): number {
        return this._width;
    }

    /**
     * Sets the width of the Rectangle.
     * @param {number} width - the width
     * @memberOf Rectangle
     */
    set width(width: number) {
        this._width = width;
    }

    /**
     * Creates an instance of Rectangle.
     * @param {number} length - the length
     * @param {number} width - the width
     * @memberOf Rectangle
     */
    public constructor(length: number, width: number) {
        this._length = length;
        this._width = width;
    }

    /**
     * Returns the area of the Rectangle.
     * @returns {number} the area
     * @memberOf Rectangle
     */
    public area() {
        return this._length * this._width;
    }

    /**
     * Returns the perimeter of the Rectangle.
     * @returns {number} the perimeter
     * @memberOf Rectangle
     */
    public perimeter() {
        return 2 * (this._length + this._width);
    }
}

/**
 * The Square class represents squares.
 * @export
 * @class Square
 * @implements {IGeometricShape}
 */
export class Square implements IGeometricShape {
    /**
     * The length of the Square.
     * @private
     * @type {number}
     * @memberOf Square
     */
    private _length: number;

    /**
     * Returns the length of the Square.
     * @type {number} the length
     * @memberOf Square
     */
    get length(): number {
        return this._length;
    }

    /**
     * Sets the length of the Square.
     * @param {number} length - the length
     * @memberOf Square
     */
    set length(length: number) {
        this._length = length;
    }

    /**
     * Creates an instance of Square.
     * @param {number} length - the length
     * @memberOf Square
     */
    public constructor(length: number) {
        this._length = length;
    }

    /**
     * Returns the area of the Square.
     * @returns {number} the area
     * @memberOf Square
     */
    public area() {
        return Math.pow(this._length, 2);
    }

    /**
     * Returns the perimeter of the Square.
     * @returns {number} the perimeter
     * @memberOf Square
     */
    public perimeter() {
        return 4 * this._length;
    }
}

/**
 * The Triangle class represents triangles.
 * @export
 * @class Triangle
 * @implements {IGeometricShape}
 */
export class Triangle implements IGeometricShape {
    /**
     * The first side of the Triangle.
     * @private
     * @type {number}
     * @memberOf Triangle
     */
    private _a: number;

    /**
     * Returns a.
     * @type {number} a
     * @memberOf Triangle
     */
    get a(): number {
        return this._a;
    }

    /**
     * Sets a.
     * @param {number} a
     * @memberOf Triangle
     */
    set a(a: number) {
        this._a = a;
    }

    /**
     * The second side of the Triangle.
     * @private
     * @type {number}
     * @memberOf Triangle
     */
    private _b: number;

    /**
     * Returns b.
     * @type {number} b
     * @memberOf Triangle
     */
    get b(): number {
        return this._b;
    }

    /**
     * Sets b.
     * @param {number} b
     * @memberOf Triangle
     */
    set b(b: number) {
        this._b = b;
    }

    /**
     * The third side of the Triangle.
     * @private
     * @type {number}
     * @memberOf Triangle
     */
    private _c: number;

    /**
     * Returns c.
     * @type {number} c
     * @memberOf Triangle
     */
    get c(): number {
        return this._c;
    }

    /**
     * Sets c.
     * @param {number} c
     * @memberOf Triangle
     */
    set c(c: number) {
        this._c = c;
    }

    /**
     * Creates an instance of Triangle.
     * @param {number} a - the first side of the Triangle
     * @param {number} b - the second side of the Triangle
     * @param {number} c - the third side of the Triangle
     * @memberOf Triangle
     */
    public constructor(a: number, b: number, c: number) {
        this._a = a;
        this._b = b;
        this._c = c;
    }

    /**
     * Returns the area of the Triangle.
     * The area is calculated with Heron's formula (https://en.wikipedia.org/wiki/Heron's_formula).
     * @returns {number} the area
     * @memberOf Triangle
     */
    public area() {
        let s = this.semiperimeter();
        return Math.sqrt(s * (s - this._a) * (s - this._b) * (s - this._c));
    }

    /**
     * Returns the perimeter of the Triangle.
     * @returns {number} the perimeter
     * @memberOf Triangle
     */
    public perimeter() {
        return this._a + this._b + this._c;
    }

    /**
     * Returns the semiperimeter of the Triangle.
     * The semiperimeter is half of the shape's perimeter.
     * @returns {number} the semiperimeter
     * @memberOf Triangle
     */
    public semiperimeter() {
        return this.perimeter() / 2;
    }
}