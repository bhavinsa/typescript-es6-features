"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Car = /** @class */ (function () {
    function Car(model) {
        this.model = model;
    }
    Car.prototype.getModel = function () {
        return this.model;
    };
    return Car;
}());
exports.Car = Car;
