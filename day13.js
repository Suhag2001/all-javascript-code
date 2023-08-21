// What types of values can be assigned to the objecct properties??

// String
// Number
// Boolean
// undefined
// Object
// Array
// function

// var person = {
//   name: "Suhag Mohinkar",
//   "email address": "suhagmohinkar@gmail.com",
//   Mobile: ["54675551266", "544477751221"],
//   age: 19,
//   isActive: true,
//   id: undefined,
//   address: {
//     street: "Sadar",
//     city: "Nagpur",
//     state: "Maharastra",
//     Country: "India",
//   },
//   Profile: function () {
//     return "Name : " + this.name;
//   },
// };

// console.log(person);

//*How to access the object properties

// 1. By using (.) operator

// console.log(person.name);

// console.log(person.email address); //it will give the error

// 2. By using ["propertyname"]

// console.log(person["name"]);
// console.log(person["email address"]);

//*Adding and replacing object properties

// person.age = 20; //replace the age  19 by 20
// person.PAN = "GJGPM4495E"; //adding the pan using new property name
// console.log(person);
// console.log(person.Profile()); //calling the function by using profile() function

//*object creation by using new keyword
// var name = new String("Suhag Mohinkar");

// console.log(typeof name);

//constructor function
// function Dog(name, age, weight, color) {
//   this.name = name;
//   this.age = age;
//   this.weight = weight;
//   this.color = color;
// }

// var a1 = new Dog("tomy", 4, 23, "black");
// var a2 = new Dog("Raja", 3, 43, "Brown");

// console.log(a1);
// console.log(a2);

//*Functions :-

// Function is named block of logically related statements .

// Function is used to reuse the code and to make program modular.

//Syntax :-

function functionName(parameters) {
  //body
}

//Example
//*file reading
// ():- paranthesis

// readFile(filename){
//     open the file
//         ..
//     read the file
//         ..
//     return content
// }

//function defination
//a and b are the parameters , those are local to current function 'add'
// function add(a, b) {
//   return a + b; //terminate the exicution of function and pass the last value of the function
// }

// function call
// var sum = add(10, 20); //10 20 are the arguments
// var x = 20,
//   y = 10;
// sum = add(x, y);
// var a = add(30, 30);

// console.log(sum);

// parameter vs argument

//In javascript a function can be assigned to a variable like a value  and can be passed as an argument to another function

// function add(a, b) {
//   return a + b;
// }

// var num = 1000;
// // num == 1000
// var a = add;

// console.log(add(10, 20));
// console.log(a(10, 20));

// function f1(fun) {
//   console.log(fun(100, 200));
// }

// f1(add);

//Matching arguments and parameters which calling a function is not mandatory

// function add(a, b) {
//   return a + b;
// }

// console.log(add()); //NaN :- not a number
// console.log(add(10)); //NaN:- not a number
// console.log(add(10, 20)); //30
// console.log(add(10, 20, 20)); //30
// console.log(add(10, 20, 30, 40)); //30
