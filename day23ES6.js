// ES6 -> ES2015 -> ECMA Script 6

// ECMA Script :- ECMA Script is a specification released by ECMA international
//in the year 1997 to standadise the javascipt.ECMA

// Features of ES6 :

//    - class
//    - const*
//    - let*
//    - Object and array destructuring*
//    - string template*
//    - spread operator
//    - rest operator
//    - Promise
//    - Modules
//    - Arrow function
//    - etc.

// let vs const vs var

// Hoisting ?

// var
//      -> hoisted
//      -> not block scope
//          if(true){
//             var num = 100;
//             console.log(num);  //100
//          }
//          console.log(num); //100
//      ->rewrittable

// let

//       -> not hoisted
//       -> block scoped
//       -> rewrittable

// const

//       ->not hoisted
//       ->block scoped
//       -> read only

//hoisted difference
// num = 200;
// console.log(num);
// var num;      //hoisted

// num = 299;
// console.log(num);
// let num;   //not hoisted it will give the error when you are trying to hoisted.

// num = 200;
// console.log(num);
// const num = 100;  //not hoisede and cannot initialize the value outside  ..

//block scope difference

// function f1() {
//   var a = 20;
//   var b = 30;
//   var c = 40;

//   if (true) {
//     var a = 100;
//     let b = 200;
//     const c = 400;
//     console.log(a); //100  //not block scope
//     console.log(b); //200 // block scope
//     console.log(c); //400 //block scope
//   }
//   console.log(a); //100
//   console.log(b); //30
//   console.log(c); //40
// }
// f1();

//rewrittable difference

// var num;
// num = 100;
// num = 200; // var rewrittable
// console.log(num);
// let num2;
// num = 100;
// num = 200; // let rewrittable
// console.log(num2);
// const num3 = 10; // const not a rewrittable
// num = 100;
// num = 200;
// console.log(num3);

//person is the refference variable of the const
// const person = {
//   name: "suhag mohinkar",
// };
// person.name = "topper skills";
// person.name = "topper ";  //we can add the external value in  the const object or array

// console.log(person);

//but we cannot use the refference variable of the constant  multiple time..
// person= {
//     mobile : "45655666555";
// }

//*string template :-  use of the backtick (``)

// i live in 'Nagpur' city
// 'i live in |'Nagpur'| city'
// "i live in 'Nagpur' city"
// console.log(`i live in "nagpur" city `);

// i live in"Nagpur" city
// "i live in \"Nagpur\" city"
// 'i live in"Nagpur" city'

// const messege =
//   "I am from Nagpur\n" + "I am a developer\n" + "I work on a project";

// const messege = `I am from nagpur
// I am a devloper
// I work on a project`;
// console.log(messege);

// const con = "Topper skills";

// const messege = "I am learing at " + con + " pune";

// const messege = `I am learning at ${con} Pune`; //by using string template we can concate the external variable data.

// console.log(messege);

// const a=10;
// const b = 80;

// console.log(`${a}+${b} = ${a+ b}`);

//array destructing

// const nums = [10, 20, 30, 40, 50, 60, 70];
// const nums = [10, 20];

// const a = nums[0];
// const b = nums[1];
// const c = nums[2];
// console.log(a, b, c);

// const [a, b, c = 99, f ] = nums; //array destruturing  means adding the data by using new variable and position in an array..

// console.log(a, b, c, f);

// Object destructuring

// const person = {
//   name: "Suhag Mohinkar",
//   mobile: "789456123",
//   city: "Nagpur",
//   contry: "India",
// };

// const name = person.name;
// const phone = person.mobile;
// const city = person.city;

// const { name, mobile: phone, city } = person;  //object destructuring means adding the new data to the object by using colon in the another object

// console.log(name, phone, city);

// Spread operator(...variableName):- Spread operator is used to extract array elements or object properties as individuals values.

// const nums = [10, 20, 30, 40, 50];

// console.log(nums);
// console.log(...nums); //spread operator

// const newArr = [100, 200, 300, ...nums];

// console.log(newArr);

// function f2(a, b, c, d) {
//   console.log(a, b, c, d);
// }

// f2(nums);

//Spread operator for object :-  did not resolve

// const person = {
//   name: "suhag",
//   mobile: "78456123",
//   city: "Nagpur",
// };

// console.log(...person);
