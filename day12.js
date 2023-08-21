// var nums = [10, 20, 30, 40, 50, 60, 70, 80, 90];

//*reduce() function :- reduce function take the prevalue of the array ..

// var sum = nums.reduce(function (preValue, num, i, arr) {
//   return preValue + num;
// }, 0);

// console.log("Sum : ", sum);

//How to empty an array

// console.log(nums);

//there are three way to  do array empty
// nums.length = 0;
// nums = [];
// nums.splice(0);

// console.log(nums);

// How check whether an array or not

// var a = [10, 20];
// var b = "xcvb";
// var c = 1900;

// //By using two ways to check is an array or not

// console.log(typeof a); //object
// console.log(typeof b); //string
// console.log(typeof c); //number

// console.log(Array.isArray(a)); //true
// console.log(Array.isArray(b)); //false
// console.log(Array.isArray(c)); //false

// find 3 consecative elements incremented by one.

// var arr = [1, 2, 3, 44, 5, 433, 5, 66, 45, 46, 47, 333, 9, 10, 11];

// for (var i = 0; i < arr.length - 2; i++) {
//   if (arr[i] + 1 == arr[i + 1] && arr[i + 1] + 1 == arr[i + 2]) {
//     console.log(arr[i] + "-" + arr[i + 1] + "-" + arr[i + 2]);
//   }
// }

// find max nummber from array
// var arr = [1, 2, 3, 44, 5, 433, 5, 66, 45, 46, 47, 333, 9, 10, 11];

// // solution 1 :

// var max = arr[0];

// for (var n of arr) {
//   if (n > max) max = n;
// }

// console.log(max);

// //solution 2 :

// arr.sort(function (a, b) {
//   return b - a;
// });

// console.log("Max :" + arr[0]);

// find min nummber from array
// var arr = [1, 2, 3, 44, 5, 433, 5, 66, 45, 46, 47, 333, 9, 10, 11];

// // solution 1 :

// var min = arr[0];

// for (var n of arr) {
//   if (n < min) min = n;
// }

// console.log(min);

// //solution 2 :

// arr.sort(function (a, b) {
//   return a - b;
// });

// console.log("Min :" + arr[0]);

//End array here

//new concept

//*class :-

// class is a logical entity which represents a category.

// class is a model from which multiple objects can be created

// class is used to define state and behaviour of an object .

//*Object :-

// object is an instance of class.

// object has state (values) and beheviour (activities).

//example.

// class dog{

//     //state
//     name;
//     color;
//     age;
//     weight;
//     height;

//     // behaviour

//     eating(){
//         console.log("eating...");
//     }
//     running(){
//         console.log("running...");
//     }
//     barking(){
//         console.log("barking...");
//     }
// }

//object creation :-

// there are many ways to create object.

// 1. By using object literal

// example : -
// var obj = { name : "abc"}

// 2. By using 'new' keywords

// example :-
// var obj = new Constructor();

// property naming

//follow lower camel case
//first-name = invalid
//first name = invalid
//"first name" = valid
//firstName = valid

//External variable value as property name
var em = "address";
var email = "email";
var person = {
  name: "suhag Mohinkar",
  "last name": "Mohinkar",
  mobile: "7218342490",
  [email]: "suhagmohinkar100@gmail.com",
  [em]: "Nagpur",
};

console.log(typeof person);
console.log(person);
