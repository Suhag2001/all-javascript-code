//Error() : Types of error

// Error

// SyntaxError

// ReferenceError

// URIError

// DOMException

// EvalError

// MediaError

// TypeError

// RangeError

//Custom Error
//Example :-
// function validateEmail(email) {
//   if (email.length < 4) {
//     throw new Error("Invalid Email");  //we can create the custom error by using Error element .
//     and by using throw keyword will throw the object ..
//   }
//   console.log("Valid Email");
// }
// // validateEmail("Suhag@gmail.com"); //when we
// try {
//   validateEmail("Su");
// } catch (e) {
//   console.log("Enter a valid email");
// }

//* Strict mode :-
//   -Javascript ignores most of the errors if executed in normal mode
//   -If you do not want errors to be ignored then execute Javascript in strict mode .
//  -To enable strict mode we need to add "use strict"  before the javascript code
//   then The strict mode  can be ecable for whole script or for a particular function

// "use strict";

// function f1(a, a, a) {
//   console.log(a, a, a);
// }

// f1(10, 20, 30);

//DOM

//interview questions :-
// let arr = [1, 2, 3, 4, 5, 6];
// let obj = { arr };
// console.log(obj);

// const arr = [3, 4, 5, 6];
// arr.foo = "hi";
// arr.hoo = 23;
// console.log(arr);

//DOM :- Document object model is a dynamic representation of a web page
//maintained by the browser to display web page content on the viewport.

// DOM has a tree like structure , you can call it DOM tree

// The DOM tree has 2 types of Nodes
//   1. Element Node :- nodes of the DOM tree created for a html element are called element node .
//    - Element nodes have child nodes .
//    - Element nodes are the javascript objects having multiple properties and events.

//    2. Text Node :- The text nodesd are created for textual content and spaces in the html elements .

//How to access DOM nodes :

// There are six functions to access the DOM nodes :-

//  1.getElementById('')  :- This fuction returns a single node of DOM tree which matches the provided id ..

//  2.getElementByTagName('') :- returns a nodelist of all the elements nodes created from the provided tag name .

//  3.getElementByClassName('') :- returns a nodelist of all the elements having provided classname .

//  4.getElementByName('') :- returns a nodelist of all the elements having provided name .

//  5.querySelector()  :- returns a single node who matches the provided css selector .DOM

//  6.querySelectorAll() :- returns a nodelist of all the element nodes who matches the provided css selector
