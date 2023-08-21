//Function Types

// 1. named function :- A function define by providing a named is called named function.

// Syntax :

// function functionName(parameters){
//  body
// }

// 2. Anonymous function :- A function defined without name is  called Anonymous function

// Syntax:
// fuction(parameters){
//     body
// }

// use cases of Anonymous function

// ---to pass function as an arguments :-

// function handleClick(e) {
//   console.log("i am happy....");
// }

// button.addEventListener("click", handleClick);

//above fuction made the lots of line of syntax thats why we are using the anonymous function as arguments..

// button.addEventLister("click",function (e) {
//     console.log("I am very happy....");
//   });

//---to use a function as object property value

// var person = {
//   name: "Suhag Mohinkar ",
//   mobile: "7542165895",
//   profile: function () {
//     console.log("Named : " + this.name + "Mobile :" + this.mobile);
//   },
// };

// person.profile();
// console.log(person);

//---to write a self Inovaking function Expression

// (function () {
//   console.log("Suhag Mohinkar");
// })();

// 3.Arrow function (ES6) // we will learn in ES6 (ecma script)

//Hosting vs Hoisting

// web  hosting

//hoisting :- In javascript , hoisting is a default behaviour of moving function declarations and variable declaration to the top of its current scope..

//Note : variable initialization is not hosted , only declaration is hosted

//Example :

//variable declaration
// city = "Pune"; //variable initialization is not hoisted
//   console.log(city); //variale use
//   var city; //variable declaration - hoisting is done for the variable declaration

// function f1() {
//   city = "Pune"; //variable initialization is not hoisted
//   console.log(city); //variale use
//   var city; //variable declaration - hoisting is done for the variable declaration
// }
// f1();

//Function Declaration vs Function Expression

// Function Declaration :- If function definition line starts with 'function' keyword then it is called function declaration

// Example :-

// console.log(add(383, 48));

// function add(a, b) {
//   return a + b;
// }

// function declaration is hoisted .

// Function Expression :- If function defination does not start with 'function ' keyword then  it is called function expression

// Example :-

// var add = function (a, b) {
//   return a + b;
// };
// console.log(add(37, 33));

// // or

//self invoking function expression

// (function () {
//   console.log("suhag mohinkar");
// })();

//function expression are not hoisted

//*'arguments' objects :- the 'arguments' object is a built in object available in all the javascript function ...

// the arguments object provides the details about thee current function call like number of arguments passed , function caller , list of arguments .

// function add(a, b) {
//   console.log(arguments);
//   console.log("No. of arguments :" + arguments.length);
//   console.log("caller :" + arguments.callee.caller.name);
//   return a + b;
// }

// add();
// add(10);
// add(10, 20);

//f1 is the caller of the add collee
// function f1() {
//   add(10, 20, 30);
// }

// f1();

//Write a function to calculate average

function avg() {
  var length = arguments.length;
  var sum = 0;

  for (var e of arguments) {
    sum += e;
  }
  return sum / length;
}

console.log(avg(10, 20, 30, 40, 50));
