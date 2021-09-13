let id: number = 5;
let fullname: string = "Irshad Ali Jan";
let age: number = 32;
let isGraduated: boolean = true;
let lastCompany: any = "ABC co. Ltd., City, Country";

let ids: number[] = [1, 2, 3, 4, 5]; //only numbers items in array
let fruits: string[] = ["Mango", "Banana", "Grapes", "Water Melon"]; // only strings in array

//tuple
//with tuple we can give a specific data type to each item in array defined.
let person: [number, string, boolean] = [3, "hello", false];

//tuple Array
//with tuple arrayy we can give a specific data type to each item as array deffined.
let students: [number, string][] = [
  [1, "irshad"],
  [2, "ali"],
  [3, "jan"],
];

//unions
//giving more than one data type for a variable
let orderID: number | string = "order2344";

//Enums
//Enums allow a developer to define a set of named constants.
//Using enums can make it easier to document intent, or create a set of distinct cases.
//TypeScript provides both numeric and string-based enums.
enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

console.log(Direction.Right);

enum UserResponse {
  No = 0,
  Yes = 1,
}

function respond(recipient: string, message: UserResponse): void {
  console.log("respond", `${recipient} responds with ${message}`);
}

respond("Irshad", UserResponse.No);

//Objects

const userData: {
  id: number;
  name: string;
  age: number;
} = {
  id: 1,
  name: "Irshad",
  age: 32,
};
//we can define type and use it as data type for object for clean code as compared to above one
type User = {
  id: number;
  name: string;
  age: number;
};
const userData1: User = {
  id: 1,
  name: "Irshad",
  age: 32,
};

//type assertion
//it means to force to use that datatype if defined different before
let cID: any = 1;
//let custID = <number>cID;
let custID = cID as number; //this is same as above custID defined

//functions

function sum(num1: number, num2: number): number {
  return num1 + num2;
}

function logMsg(id: string, msg: any): void {
  console.log(id, msg);
}

logMsg("Sum is ", sum(2, 23));

//Interfaces
// we can use ? for optional property
//we can use readonly before property name to make it readonly so that it can't be modified
interface UserInterface {
  readonly id: number;
  name: string;
  age?: number;
}

const user1: UserInterface = {
  id: 213,
  name: "Irshad Ali",
};

//Interfaces for functions
interface MathFunc {
  (a: number, b: number): number;
}

const add: MathFunc = (a: number, b: number): number => a + b;

logMsg("Add interface func result ", add(25, 23));

//Classes
//private,public,protected and readonly are the access specifiers
class Invoices {
  invID: number;
  custName: string;
  payDate: string;
  paid: boolean;
  constructor(i: number, n: string, d: string, p: boolean) {
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
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numArr = getArray<number>([1, 2, 3, 4, 5]);
let strArr = getArray<string>(["a", "b", "c", "d"]);

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
