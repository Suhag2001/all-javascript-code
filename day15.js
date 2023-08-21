//* scope :-scope is level of accessibility / avaibility of the programing components like variable , objects , arrays, etc..

//there are three types of scope

//* 1. Global Scope :- If a variable is declared in a function then the scope of a variable becomes globel.

// var name = "suhag mohinkar"; //global scope

//If you declare a variable in a function without using 'var' then its scope becomes global variable

// function f1() {
//   var city1 = "nagpur"; //function scope
//   city = "pune"; //globle scope
// }
// f1();
// console.log(city);

//* 2.Function Scope :-  Each function call creates a unique scope.

// function f1(a, b, c) {
//   var c = 10;
//   c += 5;
//   c += 10;
//   console.log(a, b, c);
// }

// f1(10, 20);
// f1(100, 200);

// function getCounter() {
//   var count = 0;
//   count++;
//   count++;
//   return count;
// }
// console.log(getCounter());
// console.log(getCounter());
// console.log(getCounter());
// console.log(getCounter());

//* 3.Block Scope :- variables declared using "var" keyword are not block scoped, they are either function or global scoped .

// if (true) {
//   var city = " Nagpur";
//   let city1 = "Pune"; //Block scope
//   console.log("inside : ", city);
//   console.log("outside :", city1); //block scope we are not access the outside of the block ..
// }

// console.log("outside :", city);

//*Nested or inner functions   ;- defining a function inside a function is called inner function..

//local variables and parameters of inner functions are not accessible from outer function but variables
// and paramerters of outer function are accessible from inner function..

// var a = 10;

// function f1(b) {
//   console.log(a, b);
//   function f2(c) {
//     console.log(a, b, c);
//     function f3(d) {
//       console.log(a, b, c, d);
//       function f4(e) {
//         console.log(a, b, c, d, e);
//         function f5(f) {
//           console.log(a, b, c, d, e, f);
//         }
//       }
//     }
//   }
// }

//*Lexical scope :- lexical scope maintain a copy of outer scope to be used inside an inner function..

//* closure :-closure is a combination of lexical scope and inner function which access that lexical scope.

//closure is used to use the variables of outer scope (outer function) even after its executuin inside the inner function .

// only inner function is not  the closure.
// only lexical scope is not the closure
//to form a closure inner function must refer to lexecal scope to access the variables of outer scope.
function getCounter() {
  var counter = 0;

  function increament() {
    counter++;
    return counter;
  }
  return increament;
}

var bikes = getCounter();
//bikes is a closure because bikes function is nested in getCounter () function ans has access to variables (counter) of outer function (getCounter())
console.log("bikes: " + bikes());
console.log("bikes: " + bikes());
console.log("bikes: " + bikes());
console.log("bikes: " + bikes());

var cars = getCounter();

console.log("cars: " + cars());
console.log("cars: " + cars());
console.log("cars: " + cars());
console.log("cars: " + cars());
