"use strict";

const {
    Circle,
    Rectangle,
    Square,
    Triangle
} = require("../lib/shapes");

describe("Circle", function () {
    it("#constructor should create an instance of Circle with the correct radius", function () {
        let radius = 10;
        let circle = new Circle(radius);
        expect(circle).toEqual(jasmine.any(Circle));
        expect(circle.radius).toEqual(radius);
    });
    it("#area should return the Circle's area", function () {
        let circle = new Circle(10);
        let actual = circle.area();
        expect(actual).toBeCloseTo(314.16, 2);
    });
    it("#circumference should return the Circle's circumference/perimeter", function () {
        let circle = new Circle(10);
        let actual = circle.circumference();
        expect(actual).toBeCloseTo(62.83, 2);
    });
    it("#perimeter should return the Circle's perimeter", function () {
        let circle = new Circle(10);
        let actual = circle.perimeter();
        expect(actual).toBeCloseTo(62.83, 2);
    });
});

describe("Rectangle", function () {
    it("#constructor should create an instance of Rectangle with the correct dimensions", function () {
        let length = 10;
        let width = 20;
        let rectangle = new Rectangle(length, width);
        expect(rectangle).toEqual(jasmine.any(Rectangle));
        expect(rectangle.length).toEqual(length);
        expect(rectangle.width).toEqual(width);
    });
    it("#area should return the Rectangle's area", function () {
        let rectangle = new Rectangle(10, 20);
        let actual = rectangle.area();
        expect(actual).toEqual(200);
    });
    it("#perimeter should return the Rectangle's perimeter", function () {
        let rectangle = new Rectangle(10, 20);
        let actual = rectangle.perimeter();
        expect(actual).toEqual(60);
    });
});

describe("Square", function () {
    it("#constructor should create an instance of Square with the correct dimensions", function () {
        let length = 10;
        let square = new Square(length);
        expect(square).toEqual(jasmine.any(Square));
        expect(square.length).toEqual(length);
    });
    it("#area should return the Square's area", function () {
        let square = new Square(10);
        let actual = square.area();
        expect(actual).toEqual(100);
    });
    it("#perimeter should return the Square's perimeter", function () {
        let square = new Square(10);
        let actual = square.perimeter();
        expect(actual).toEqual(40)
    });
});

describe("Triangle", function () {
    it("#constructor should create an instance of Triangle with the correct dimensions", function () {
        let a = 3;
        let b = 4;
        let c = 5
        let triangle = new Triangle(a, b, c);
        expect(triangle).toEqual(jasmine.any(Triangle));
        expect(triangle.a).toEqual(a);
        expect(triangle.b).toEqual(b);
        expect(triangle.c).toEqual(c);
    });
    it("#area should return the Triangle's area", function () {
        let triangle = new Triangle(3, 4, 5);
        let actual = triangle.area();
        expect(actual).toEqual(6);
    });
    it("#perimeter should return the Triangle's perimeter", function () {
        let triangle = new Triangle(3, 4, 5);
        let actual = triangle.perimeter();
        expect(actual).toEqual(12);
    });
    it("#semiperimeter should return the Triangle's semiperimeter", function () {
        let triangle = new Triangle(3, 4, 5);
        let actual = triangle.semiperimeter();
        expect(actual).toEqual(6);
    });
});