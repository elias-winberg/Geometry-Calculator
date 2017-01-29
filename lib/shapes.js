"use strict";
/**
 * The Circle class represents circles.
 * @export
 * @class Circle
 * @implements {IGeometricShape}
 */
var Circle = (function () {
    /**
     * Creates an instance of Circle.
     * @param {number} radius - the radius
     * @memberOf Circle
     */
    function Circle(radius) {
        this._radius = radius;
    }
    Object.defineProperty(Circle.prototype, "radius", {
        /**
         * Returns the radius of the Circle.
         * @type {number} the radius
         * @memberOf Circle
         */
        get: function () {
            return this._radius;
        },
        /**
         * Sets the radius of the Circle.
         * @param {number} the radius
         * @memberOf Circle
         */
        set: function (radius) {
            this._radius = radius;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns the area of the Circle.
     * @returns {number} the area
     * @memberOf Circle
     */
    Circle.prototype.area = function () {
        return Math.PI * Math.pow(this._radius, 2);
    };
    /**
     * Returns the circumference/perimeter of the Circle.
     * @returns {number} the circumference/perimeter
     * @memberOf Circle
     */
    Circle.prototype.circumference = function () {
        return this.perimeter();
    };
    /**
     * Returns the perimeter of the Circle.
     * @returns {number} the perimeter
     * @memberOf Circle
     */
    Circle.prototype.perimeter = function () {
        return 2 * Math.PI * this._radius;
    };
    return Circle;
}());
exports.Circle = Circle;
/**
 * The Rectangle class represents rectangles.
 * @export
 * @class Rectangle
 * @implements {IGeometricShape}
 */
var Rectangle = (function () {
    /**
     * Creates an instance of Rectangle.
     * @param {number} length - the length
     * @param {number} width - the width
     * @memberOf Rectangle
     */
    function Rectangle(length, width) {
        this._length = length;
        this._width = width;
    }
    Object.defineProperty(Rectangle.prototype, "length", {
        /**
         * Returns the length of the Rectangle.
         * @type {number} the length
         * @memberOf Rectangle
         */
        get: function () {
            return this._length;
        },
        /**
         * Sets the length of the Rectangle.
         * @param {number} length - the length
         * @memberOf Rectangle
         */
        set: function (length) {
            this._length = length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "width", {
        /**
         * Returns the width of the Rectangle.
         * @type {number} the width
         * @memberOf Rectangle
         */
        get: function () {
            return this._width;
        },
        /**
         * Sets the width of the Rectangle.
         * @param {number} width - the width
         * @memberOf Rectangle
         */
        set: function (width) {
            this._width = width;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns the area of the Rectangle.
     * @returns {number} the area
     * @memberOf Rectangle
     */
    Rectangle.prototype.area = function () {
        return this._length * this._width;
    };
    /**
     * Returns the perimeter of the Rectangle.
     * @returns {number} the perimeter
     * @memberOf Rectangle
     */
    Rectangle.prototype.perimeter = function () {
        return 2 * (this._length + this._width);
    };
    return Rectangle;
}());
exports.Rectangle = Rectangle;
/**
 * The Square class represents squares.
 * @export
 * @class Square
 * @implements {IGeometricShape}
 */
var Square = (function () {
    /**
     * Creates an instance of Square.
     * @param {number} length - the length
     * @memberOf Square
     */
    function Square(length) {
        this._length = length;
    }
    Object.defineProperty(Square.prototype, "length", {
        /**
         * Returns the length of the Square.
         * @type {number} the length
         * @memberOf Square
         */
        get: function () {
            return this._length;
        },
        /**
         * Sets the length of the Square.
         * @param {number} length - the length
         * @memberOf Square
         */
        set: function (length) {
            this._length = length;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns the area of the Square.
     * @returns {number} the area
     * @memberOf Square
     */
    Square.prototype.area = function () {
        return Math.pow(this._length, 2);
    };
    /**
     * Returns the perimeter of the Square.
     * @returns {number} the perimeter
     * @memberOf Square
     */
    Square.prototype.perimeter = function () {
        return 4 * this._length;
    };
    return Square;
}());
exports.Square = Square;
/**
 * The Triangle class represents triangles.
 * @export
 * @class Triangle
 * @implements {IGeometricShape}
 */
var Triangle = (function () {
    /**
     * Creates an instance of Triangle.
     * @param {number} a - the first side of the Triangle
     * @param {number} b - the second side of the Triangle
     * @param {number} c - the third side of the Triangle
     * @memberOf Triangle
     */
    function Triangle(a, b, c) {
        this._a = a;
        this._b = b;
        this._c = c;
    }
    Object.defineProperty(Triangle.prototype, "a", {
        /**
         * Returns a.
         * @type {number} a
         * @memberOf Triangle
         */
        get: function () {
            return this._a;
        },
        /**
         * Sets a.
         * @param {number} a
         * @memberOf Triangle
         */
        set: function (a) {
            this._a = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Triangle.prototype, "b", {
        /**
         * Returns b.
         * @type {number} b
         * @memberOf Triangle
         */
        get: function () {
            return this._b;
        },
        /**
         * Sets b.
         * @param {number} b
         * @memberOf Triangle
         */
        set: function (b) {
            this._b = b;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Triangle.prototype, "c", {
        /**
         * Returns c.
         * @type {number} c
         * @memberOf Triangle
         */
        get: function () {
            return this._c;
        },
        /**
         * Sets c.
         * @param {number} c
         * @memberOf Triangle
         */
        set: function (c) {
            this._c = c;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns the area of the Triangle.
     * The area is calculated with Heron's formula (https://en.wikipedia.org/wiki/Heron's_formula).
     * @returns {number} the area
     * @memberOf Triangle
     */
    Triangle.prototype.area = function () {
        var s = this.semiperimeter();
        return Math.sqrt(s * (s - this._a) * (s - this._b) * (s - this._c));
    };
    /**
     * Returns the perimeter of the Triangle.
     * @returns {number} the perimeter
     * @memberOf Triangle
     */
    Triangle.prototype.perimeter = function () {
        return this._a + this._b + this._c;
    };
    /**
     * Returns the semiperimeter of the Triangle.
     * The semiperimeter is half of the shape's perimeter.
     * @returns {number} the semiperimeter
     * @memberOf Triangle
     */
    Triangle.prototype.semiperimeter = function () {
        return this.perimeter() / 2;
    };
    return Triangle;
}());
exports.Triangle = Triangle;
//# sourceMappingURL=shapes.js.map