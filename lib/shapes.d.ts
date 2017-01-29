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
export declare class Circle implements IGeometricShape {
    /**
     * The radius of the Circle.
     * @private
     * @type {number}
     * @memberOf Circle
     */
    private _radius;
    /**
     * Returns the radius of the Circle.
     * @type {number} the radius
     * @memberOf Circle
     */
    /**
     * Sets the radius of the Circle.
     * @param {number} the radius
     * @memberOf Circle
     */
    radius: number;
    /**
     * Creates an instance of Circle.
     * @param {number} radius - the radius
     * @memberOf Circle
     */
    constructor(radius: number);
    /**
     * Returns the area of the Circle.
     * @returns {number} the area
     * @memberOf Circle
     */
    area(): number;
    /**
     * Returns the circumference/perimeter of the Circle.
     * @returns {number} the circumference/perimeter
     * @memberOf Circle
     */
    circumference(): number;
    /**
     * Returns the perimeter of the Circle.
     * @returns {number} the perimeter
     * @memberOf Circle
     */
    perimeter(): number;
}
/**
 * The Rectangle class represents rectangles.
 * @export
 * @class Rectangle
 * @implements {IGeometricShape}
 */
export declare class Rectangle implements IGeometricShape {
    /**
     * The length of the Rectangle.
     * @private
     * @type {number}
     * @memberOf Rectangle
     */
    private _length;
    /**
     * Returns the length of the Rectangle.
     * @type {number} the length
     * @memberOf Rectangle
     */
    /**
     * Sets the length of the Rectangle.
     * @param {number} length - the length
     * @memberOf Rectangle
     */
    length: number;
    /**
     * The width of the Rectangle.
     * @private
     * @type {number}
     * @memberOf Rectangle
     */
    private _width;
    /**
     * Returns the width of the Rectangle.
     * @type {number} the width
     * @memberOf Rectangle
     */
    /**
     * Sets the width of the Rectangle.
     * @param {number} width - the width
     * @memberOf Rectangle
     */
    width: number;
    /**
     * Creates an instance of Rectangle.
     * @param {number} length - the length
     * @param {number} width - the width
     * @memberOf Rectangle
     */
    constructor(length: number, width: number);
    /**
     * Returns the area of the Rectangle.
     * @returns {number} the area
     * @memberOf Rectangle
     */
    area(): number;
    /**
     * Returns the perimeter of the Rectangle.
     * @returns {number} the perimeter
     * @memberOf Rectangle
     */
    perimeter(): number;
}
/**
 * The Square class represents squares.
 * @export
 * @class Square
 * @implements {IGeometricShape}
 */
export declare class Square implements IGeometricShape {
    /**
     * The length of the Square.
     * @private
     * @type {number}
     * @memberOf Square
     */
    private _length;
    /**
     * Returns the length of the Square.
     * @type {number} the length
     * @memberOf Square
     */
    /**
     * Sets the length of the Square.
     * @param {number} length - the length
     * @memberOf Square
     */
    length: number;
    /**
     * Creates an instance of Square.
     * @param {number} length - the length
     * @memberOf Square
     */
    constructor(length: number);
    /**
     * Returns the area of the Square.
     * @returns {number} the area
     * @memberOf Square
     */
    area(): number;
    /**
     * Returns the perimeter of the Square.
     * @returns {number} the perimeter
     * @memberOf Square
     */
    perimeter(): number;
}
/**
 * The Triangle class represents triangles.
 * @export
 * @class Triangle
 * @implements {IGeometricShape}
 */
export declare class Triangle implements IGeometricShape {
    /**
     * The first side of the Triangle.
     * @private
     * @type {number}
     * @memberOf Triangle
     */
    private _a;
    /**
     * Returns a.
     * @type {number} a
     * @memberOf Triangle
     */
    /**
     * Sets a.
     * @param {number} a
     * @memberOf Triangle
     */
    a: number;
    /**
     * The second side of the Triangle.
     * @private
     * @type {number}
     * @memberOf Triangle
     */
    private _b;
    /**
     * Returns b.
     * @type {number} b
     * @memberOf Triangle
     */
    /**
     * Sets b.
     * @param {number} b
     * @memberOf Triangle
     */
    b: number;
    /**
     * The third side of the Triangle.
     * @private
     * @type {number}
     * @memberOf Triangle
     */
    private _c;
    /**
     * Returns c.
     * @type {number} c
     * @memberOf Triangle
     */
    /**
     * Sets c.
     * @param {number} c
     * @memberOf Triangle
     */
    c: number;
    /**
     * Creates an instance of Triangle.
     * @param {number} a - the first side of the Triangle
     * @param {number} b - the second side of the Triangle
     * @param {number} c - the third side of the Triangle
     * @memberOf Triangle
     */
    constructor(a: number, b: number, c: number);
    /**
     * Returns the area of the Triangle.
     * The area is calculated with Heron's formula (https://en.wikipedia.org/wiki/Heron's_formula).
     * @returns {number} the area
     * @memberOf Triangle
     */
    area(): number;
    /**
     * Returns the perimeter of the Triangle.
     * @returns {number} the perimeter
     * @memberOf Triangle
     */
    perimeter(): number;
    /**
     * Returns the semiperimeter of the Triangle.
     * The semiperimeter is half of the shape's perimeter.
     * @returns {number} the semiperimeter
     * @memberOf Triangle
     */
    semiperimeter(): number;
}
