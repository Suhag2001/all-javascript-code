//context :- context is an object on which a function is called.
//context is the current running objects in the functions.

//this :- 'this' keyword is used within the functions to access the context..

// function f1(a, b) {
//   console.log(this); //global object
//   console.log(a, b);
// }
// f1();

// var obj = {
//   name: "suhag mohinkar",
// };

// call() :- It is used to call  a function on a particular Object .

//call() and apply() both are used to call a function on an object but
//difference is that in case of call() arguments are passed as individual values and
//in case of apply() the arguments are passed as array elements..

// call() and apply()  are used to one time function call by changing the context .

// f1.call(obj, 10, 20);
// f1.apply(obj, [10, 20]);

// function printProfile() {
//   console.log("Name: ", this.name);
//   console.log("Mobile: ", this.mobile);
//   console.log("e-mail: ", this.email);
// }

// var per1 = { name: "suhag", mobile: "99892326", email: "suhag@gmail.com" };
// var per2 = { name: "adddi", mobile: "4556565", email: "adddi@gmail.com" };

// printProfile();
// printProfile.call(per1);
// printProfile.call(per2);

//bind() :- this function creates and bind the function with an object .

//bind accept the function and objects .

//bind() returns a newly binded functions, it does bind the original function

// function printProfile() {
//   console.log("Name: ", this.name);
//   console.log("Mobile: ", this.mobile);
//   console.log("e-mail: ", this.email);
// }

// var per1 = { name: "suhag", mobile: "99892326", email: "suhag@gmail.com" };
// var per2 = { name: "addi", mobile: "99892326", email: "suhag@gmail.com" };
// var per3 = { name: "ameee", mobile: "99892326", email: "suhag@gmail.com" };

// var bindedFun1 = printProfile.bind(per1);
// var bindedFun2 = printProfile.bind(per2);
// var bindedFun3 = printProfile.bind(per3);

// bindedFun1();
// bindedFun2();
// bindedFun3();

//*Date : -

//How to create a date

//Changing the date

//accessing the date

//The Date() constructor is used to create a date object .
//The date object represents a time instance

//Date() creates an instance of current date and time.
//Date(milisecond); //Note : milliseconds starts from 1 jan 1970 , 00:00:00:000
//Date(Year, month, date, hour , minutes , seconds , milliseconds)

// var d = new Date();
// var d = new Date(44465456);
// var d = new Date(2022, 5, 3);
// var d = new Date(new Date(Date.now()));

// console.log(d);

//setter method are used to change  the date

//moth index starts from 0 to 11

// 0-jan
// 1-feb
// .
// .
// 11-dec

// days of week
// 0-sun
// 1-mon
// .
// .
// 6- sat

// var d = new Date();

// console.log(d);

// d.setFullYear(2021);
// d.setMonth(11);
// d.setDate(23);
// d.setHours(10);
// d.setMinutes(30);
// d.setSeconds(45);
// d.getMilliseconds(120);

// console.log(d);

// console.log(d.getFullYear());
// console.log(d.getMonth());
// console.log(d.getDate());
// console.log(d.getDay());

//using date locally

// console.log(d.toLocaleString());
// console.log(d.toLocaleDateString());
// console.log(d.toLocaleTimeString());

//formate the date in your formate

var d = new Date();
function formatDate(d) {
  return d.getDate() + "-" + (d.getMonth() + 1) + "-" + d.getFullYear();
}

console.log(formatDate(d));

//day and month

var days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

var months = [
  "jan",
  "feb",
  "mar",
  "apr",
  "may",
  "jun",
  "jul",
  "aug",
  "sep",
  "oct",
  "nov",
  "dec",
];
``;

console.log("Day :-" + days[d.getDay()]);
console.log("Month :-" + months[d.getMonth()]);
