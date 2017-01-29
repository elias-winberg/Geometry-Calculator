"use strict";

const {
    Circle,
    Rectangle,
    Square,
    Triangle
} = require("../lib/shapes");

const {
    calculateTotalArea
} = require('../lib/util');

function CustomShape() {}

CustomShape.prototype.area = function () {
    return 343;
};

describe("util", function () {
    it("#calculateTotalArea should return the total area of multiple IGeometricShapes", function () {
        let circle = new Circle(10);
        let custom = new CustomShape();
        let rectangle = new Rectangle(10, 20);
        let square = new Square(15);
        let triangle = new Triangle(3, 4, 5);
        let actual = calculateTotalArea([circle, custom, rectangle, square, triangle]);
        expect(actual).toBeCloseTo(1088.16, 2);
    });
});