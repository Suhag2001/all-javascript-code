// //typeof operator given the datatypes

// JavaScript has 8 Datatypes
// 1. String
let name = "John";
// 2. Number
let age = 25;
// 3. Bigint
let bigValue = 1234567890123n;
// 4. Boolean
let isStudent = true;
// 5. Undefined
let undefinedVariable;
// 6. Null
let noValue = null;
// 7. Symbol
const uniqueSymbol = Symbol("description");
// 8. Object
let person = {
  name: "Alice",
  age: 30,
  isStudent: false
};
console.log(uniqueSymbol);

// // all the numbers having a number datatypes

// console.log(typeof 100.98); //Number
// console.log(typeof "Suhag"); //String

// // NaN - Not a Number
// console.log(typeof NaN); //Number

// var a, b;
// a = 100;
// console.log(100 * 2);
// console.log(a * b); //it will give the output NaN because we not initialize the variable

// // //Infinity is also a number

// console.log(typeof Infinity); //Number

// var num = 20000;

// while (num != Infinity) {
//   num = num * 1322200;
//   console.log(num);
// }

// //string to number conversion
// //there are three way to convert string into number
// // 1.Number
// // 2.parseFloat
// // 3.parseInt

// var num1 = "93833";
// var num2 = "100.44k94d99";
// // var num3 = "1000.47498absvef35535344";
// var num3 = 345.55;

// console.log(typeof Number(num1)); //Number
// console.log(Number(num1)); //number only alows the number , op= 93833
// console.log(parseFloat(num2)); //it is parse only float number, op= 100.4494
// console.log(parseInt(num3)); ///it is parse only number, op= 1000

// //to fix the pointer number by using "toFixed"

var num = 399993.93333;

// console.log(num.toFixed(0));
// console.log(num.toFixed(3)); // toFixed is use for the fixed the number after the point

// //math

//Math.round
// console.log(Math.round(123.4567)); //0-4 ,op=123
// console.log(Math.round(123.5434)); //5-9 increase by 1, op=124

// //Math.floor
// console.log(Math.floor(232.44)); //232
// console.log(Math.floor(232.9)); //232

// //Math.ceil
// console.log(Math.ceil(424.0)); //424
// console.log(Math.ceil(424.1)); //425
// console.log(Math.ceil(424.9)); //425

// Math.random;  //we will get random output
// console.log(Math.random() * 186); //op=16.050745552221613/

var rand = Math.random() * 100;
var n = Math.floor(rand);
console.log(n);     //op= 38

//Home work

// var amount = 5311;

// var d;
// d = Math.floor(amount / 2000);
// amount = amount % 2000;
// console.log("2000 :", d);

// d = Math.floor(amount / 500);
// amount = amount % 500;
// console.log("500 :", d);

// d = Math.floor(amount / 100);
// amount = amount % 100;
// console.log("100 :", d);

// d = Math.floor(amount / 50);
// amount = amount % 50;
// console.log("50 :", d);

// d = Math.floor(amount / 20);
// amount = amount % 20;
// console.log("20 :", d);

// d = Math.floor(amount / 10);
// amount = amount % 10;
// console.log("10 :", d);

// d = Math.floor(amount / 5);
// amount = amount % 5;
// console.log("5 :", d);

// d = Math.floor(amount / 2);
// amount = amount % 2;
// console.log("2 :", d);

// d = Math.floor(amount / 1);
// amount = amount % 1;
// console.log("1 :", d);

// //same solution for the program
// var amount = 558921;

// var notes = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];

// for (var i = 0; i < notes.length; i++) {
//   var note = notes[i];
//   var d = Math.floor(amount / note);
//   amount = amount % note;
//   if (d > 0) console.log(note + ": ", d);
// }

// reverse the number

// var num = 12345;

// console.log(num % 10);

// while (num > 1) {
//   num = Math.floor(num / 10);
//   console.log(num % 10);
// }
