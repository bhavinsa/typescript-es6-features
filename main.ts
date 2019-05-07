/**

ES5 - ECMAScript 5 - Supported all browser
ES6 - ES2015
ES7 - ES2016
ES8 - ES2017

**/

// const variable declaration must be with value.
const title = "Typescript";

// variable declaration with type. DataType is number, string, boolean, any
// let and const is block level access scope and var is functional level access scope.
let a: number = 1;
let b: string = 'Hello';
let c: boolean = true;
let d: any;
let e: number[] = [1, 2, 3, 4, 5];
let f: any[] = ['1', 'Sam', true]

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);


// enum
enum color { Red = 10, Blue = 30, Green = 50 }
let myColor: color = color.Red;
console.log(myColor);


// Type assertions
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;


// String interpolation
// Multi-Line Strings, using the back-tick character `
let msg: string = `My favorite color 
                   value is ${myColor}`;
console.log(msg);

// Function with input param type and return param type. Here num2 param is optional.
function add(num1: number, num2?: number): number {
    if (num2)
        return num1 + num2;
    else
        return num1;
}

console.log(add(10, 20));
console.log(add(10));


// Function with input param type and return param type. Here num2 param with default value.
function sum(num1: number, num2: number = 0): number {
    if (num2)
        return num1 + num2;
    else
        return num1;
}

console.log(sum(10, 20));
console.log(sum(10));

// Interface
interface Person {
    firstName: string,
    lastName: string
}

let person: Person = {
    firstName: "Sam",
    lastName: "John"
}
function getFullName(person: Person): string {
    return `Full name is ${person.firstName} ${person.lastName}`;
}

console.log(getFullName(person));

// Class

class employee {
    employeeName: string

    constructor(name: string) {
        this.employeeName = name;
    }

    greet() {
        console.log(`Welcome employee :  ${this.employeeName}`);
    }
}

const emp1 = new employee('Jack');
emp1.greet();

class manager extends employee {
    constructor(name: string) {
        super(name);
    }

    assignTask() {
        console.log(`Manager can assign the task.`);
    }
}

const mng1 = new manager('Jim');
mng1.assignTask();
mng1.greet();


// Arrow Function
let doLog = (log) => console.log(log);
doLog('This is test log');



// Access Modifiers in Constructor Parameters
// Public - Access from class, derived class, out side class using object
// Protected -  Access from class and derived class
// Private : Access from class only

// GET & SET Properties
class Point {

    // Here, we don't need to create variable named _x and _y, 
    // these will created and value assign automatic that we have provided in object initialization.
    // x:number;
    // y:number;
    constructor(private _x?: number, private _y?: number) {
        // Here x and y is private so we can't access like out side of class.
        // obj1.x or obj1.y
    }

    get x() {
        return this._x;
    }

    set x(value) {
        this._x = value;
    }
}

let obj1 = new Point(1, 2);
console.log(obj1.x) //1
obj1.x = 10;
console.log(obj1.x) //10

//Module

import { Car } from './car'

let honda = new Car('Amaze');
console.log(honda.getModel());


// Spread operator.
// Spread allocation of value

let getTotal = (x?: any, y?: any, z?: any) => {
    return x + y + z;
}
// Pass each elem of array as argument
console.log(getTotal(...[1, 2, 3]))


// Rest
// We can allow unlimited params to function by using the rest operator.

function demo(...part2) {
    return { part2 }
}

console.log(demo(1, 2, 3, 4, 5, 6))