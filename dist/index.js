"use strict";
let id = 5;
let fullname = "Irshad Ali Jan";
let age = 32;
let isGraduated = true;
let lastCompany = "ABC co. Ltd., City, Country";
let ids = [1, 2, 3, 4, 5]; //only numbers items in array
let fruits = ["Mango", "Banana", "Grapes", "Water Melon"]; // only strings in array
//tuple
//with tuple we can give a specific data type to each item in array defined.
let person = [3, "hello", false];
//tuple Array
//with tuple arrayy we can give a specific data type to each item as array deffined.
let students = [
    [1, "irshad"],
    [2, "ali"],
    [3, "jan"],
];
//unions
//giving more than one data type for a variable
let orderID = "order2344";
//Enums
//Enums allow a developer to define a set of named constants.
//Using enums can make it easier to document intent, or create a set of distinct cases.
//TypeScript provides both numeric and string-based enums.
var Direction;
(function (Direction) {
    Direction["Up"] = "UP";
    Direction["Down"] = "DOWN";
    Direction["Left"] = "LEFT";
    Direction["Right"] = "RIGHT";
})(Direction || (Direction = {}));
console.log(Direction.Right);
var UserResponse;
(function (UserResponse) {
    UserResponse[UserResponse["No"] = 0] = "No";
    UserResponse[UserResponse["Yes"] = 1] = "Yes";
})(UserResponse || (UserResponse = {}));
function respond(recipient, message) {
    console.log("respond", `${recipient} responds with ${message}`);
}
respond("Irshad", UserResponse.No);
//Objects
const userData = {
    id: 1,
    name: "Irshad",
    age: 32,
};
const userData1 = {
    id: 1,
    name: "Irshad",
    age: 32,
};
//type assertion
//it means to force to use that datatype if defined different before
let cID = 1;
//let custID = <number>cID;
let custID = cID; //this is same as above custID defined
//functions
function sum(num1, num2) {
    return num1 + num2;
}
function logMsg(id, msg) {
    console.log(id, msg);
}
logMsg("Sum is ", sum(2, 23));
const user1 = {
    id: 213,
    name: "Irshad Ali",
};
const add = (a, b) => a + b;
logMsg("Add interface func result ", add(25, 23));
//Classes
//private,public,protected and readonly are the access specifiers
class Invoices {
    constructor(i, n, d, p) {
        this.custName = n;
        this.invID = i;
        this.paid = p;
        this.payDate = d;
    }
}
const inv = new Invoices(1234, "Irshad Ali Jan", "22/2/2021", false);
//Generics
//Used mainly for reusable code
//T is used as placeholder to use any args data type or return type dynamically
function getArray(items) {
    return new Array().concat(items);
}
let numArr = getArray([1, 2, 3, 4, 5]);
let strArr = getArray(["a", "b", "c", "d"]);
logMsg("NumberArray", numArr);
let nameSpan = document.getElementById("fullname") || null;
let ageSpan = document.getElementById("age") || null;
let graduatedSpan = document.getElementById("graduated") || null;
let companySpan = document.getElementById("company") || null;
if (nameSpan) {
    nameSpan.textContent = fullname;
}
if (graduatedSpan) {
    graduatedSpan.textContent = isGraduated ? "Yes" : "No";
}
if (companySpan) {
    companySpan.textContent = lastCompany;
}
