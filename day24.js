// Spread Operator : By using spread (...object) operator we can add the two objects in one object

// const obj1 = {
//   name: "Suhag Mohinkar",
// };

// const obj2 = {
//   mobile: "4556985466",
// };

// const target = { ...obj1, ...obj2 };

// console.log(target);

//Rest operator : Rest operator is an array which store all the arguments which do not have matching parameters while calling a function

// function f1(a, b, c, ...args) {
//   console.log(a, b, c);
//   console.log(arguments);
//   console.log(args);
// }

// f1(10, 20, 30);
// f1(10, 20, 30, 40, 50);

//Arrow function : Arrow functions  provides a  way to define a function is very short code
//arrow function is also called fat function

// Syntax : -
// (parameters)=>{}

// const sq = function (a) {
//   return a * a;
// };
// console.log(sq(10));

// const sq2 = (b) => {
//   return b * b;
// };

// console.log(sq2(40));

//Rules of arrow function :
//- If there is single parameter then paranthesis are optinal
// ex.const sq2 =  a => {return a * a; }

//-If there is a single expression / statement in the body then return statement and curly braces are optional
// ex. const sq2 = (a) => a * a;

//How to derive the this in arrow function
//"this" keyword in Named and anonymous function always refers to the current context (the object on which the function is called.)
//"this" keyword in arrow function referes to the parent context (the context the under which the arrow function is defined) . It does  not matter where the function is called .

// name = "jayesh";
// mobile = "5555555555";
// const person = {
//   name: "suhag",
//   mobile: "5469888555",
//   profile: function () {
//     return () => {
//       return `Name : ${this.name}, Mobile : ${this.mobile}`;
//     };
//   },
// };

// const func = person.profile();

// console.log(func());

// const uname = "abcd";
// const print = () => {
//   console.log("welcome " + uname);
// };

// print();


//Object Cloning 

// JSON (JavaScript Object Notation)

// JSON is format similar to JavaScript object which is used to store the information in String forms 


// Uses of JSON :-

// -> to exchage the information between two software (client and server)
// -> to store some configuration data about the project 


// Rules :-
// -> In JSON object all the property name must be in double quote (" ")
// ->functions are not allowed in an object 

// const person = {
//   name : "toppwe Skills", 
//   age : "4b"
// }
