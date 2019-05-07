"use strict";
/**

ES5 - ECMAScript 5 - Supported all browser
ES6 - ES2015
ES7 - ES2016
ES8 - ES2017

**/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// const variable declaration must be with value.
var title = "Typescript";
// variable declaration with type. DataType is number, string, boolean, any
// let and const is block level access scope and var is functional level access scope.
var a = 1;
var b = 'Hello';
var c = true;
var d;
var e = [1, 2, 3, 4, 5];
var f = ['1', 'Sam', true];
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
// enum
var color;
(function (color) {
    color[color["Red"] = 10] = "Red";
    color[color["Blue"] = 30] = "Blue";
    color[color["Green"] = 50] = "Green";
})(color || (color = {}));
var myColor = color.Red;
console.log(myColor);
// Type assertions
var someValue = "this is a string";
var strLength = someValue.length;
// String interpolation
// Multi-Line Strings, using the back-tick character `
var msg = "My favorite color \n                   value is " + myColor;
console.log(msg);
// Function with input param type and return param type. Here num2 param is optional.
function add(num1, num2) {
    if (num2)
        return num1 + num2;
    else
        return num1;
}
console.log(add(10, 20));
console.log(add(10));
// Function with input param type and return param type. Here num2 param with default value.
function sum(num1, num2) {
    if (num2 === void 0) { num2 = 0; }
    if (num2)
        return num1 + num2;
    else
        return num1;
}
console.log(sum(10, 20));
console.log(sum(10));
var person = {
    firstName: "Sam",
    lastName: "John"
};
function getFullName(person) {
    return "Full name is " + person.firstName + " " + person.lastName;
}
console.log(getFullName(person));
// Class
var employee = /** @class */ (function () {
    function employee(name) {
        this.employeeName = name;
    }
    employee.prototype.greet = function () {
        console.log("Welcome employee :  " + this.employeeName);
    };
    return employee;
}());
var emp1 = new employee('Jack');
emp1.greet();
var manager = /** @class */ (function (_super) {
    __extends(manager, _super);
    function manager(name) {
        return _super.call(this, name) || this;
    }
    manager.prototype.assignTask = function () {
        console.log("Manager can assign the task.");
    };
    return manager;
}(employee));
var mng1 = new manager('Jim');
mng1.assignTask();
mng1.greet();
// Arrow Function
var doLog = function (log) { return console.log(log); };
doLog('This is test log');
// Access Modifiers in Constructor Parameters
// Public - Access from class, derived class, out side class using object
// Protected -  Access from class and derived class
// Private : Access from class only
// GET & SET Properties
var Point = /** @class */ (function () {
    // Here, we don't need to create variable named _x and _y, 
    // these will created and value assign automatic that we have provided in object initialization.
    // x:number;
    // y:number;
    function Point(_x, _y) {
        this._x = _x;
        this._y = _y;
        // Here x and y is private so we can't access like out side of class.
        // obj1.x or obj1.y
    }
    Object.defineProperty(Point.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (value) {
            this._x = value;
        },
        enumerable: true,
        configurable: true
    });
    return Point;
}());
var obj1 = new Point(1, 2);
console.log(obj1.x); //1
obj1.x = 10;
console.log(obj1.x); //10
//Module
var car_1 = require("./car");
var honda = new car_1.Car('Amaze');
console.log(honda.getModel());
// Spread operator.
// Spread allocation of value
var getTotal = function (x, y, z) {
    return x + y + z;
};
// Pass each elem of array as argument
console.log(getTotal.apply(void 0, [1, 2, 3]));
// Rest
// We can allow unlimited params to function by using the rest operator.
function demo() {
    var part2 = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        part2[_i] = arguments[_i];
    }
    return { part2: part2 };
}
console.log(demo(1, 2, 3, 4, 5, 6));
