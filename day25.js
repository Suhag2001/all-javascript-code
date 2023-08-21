//Prototype :-

// In javascript for each functon an anonymous objects gets creacted.

// To access that anonymous object the function have a property called "prototype"

//function
function Person(a, b) {
  this.name = a;
  this.mobile = b;
}

Person.prototype.country = "India";
Person.prototype.profile = function () {
  return `Name : ${this.name}, Contact :${this.mobile}, Country : ${this.country}`;
};
// Object
const per1 = new Person("suhag", "845666", "Bharat");
// per1.country = "India";
const per2 = new Person("Vaibhav", "5454566");
// per2.country = "India";

// per1.profile = function () {
//   return
//   `My Profile : Name : ${this.name}, Contact : ${this.mobile}`;
// };

// console.log(per1);
// console.log(per1.country);
// console.log(per1.profile());
// console.log(per2.profile());
// console.log(per2);
// console.log(Person);

// Prototype chaninig
// dunder proto: __proto__(under score under score proto )


// console.log(per1.profile());
// console.log(per1.__proto__.profile());

// console.log(per1);

// console.log(per1.__proto__);
// console.log(Object.getPrototypeOf(per1));

// console.log(per1.__proto__.__proto__);
// console.log(Object.getPrototypeOf(Object.getPrototypeOf(per1)));

// console.log(per1.__proto__.__proto__.__proto__);
// console.log(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(per1))));


// const newObj =  Object.create(per1);
// console.log(newObj);
// console.log(newObj.__proto__);


//Class from 1.08.34