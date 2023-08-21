//* Array

// [] is an array literal
// size not required to provide

// var cities = [" Pune ", "Nagpur"];

// console.log("size :", cities.length);

// cities.push("Munmbai");
// console.log("Size :", cities.length);

// cities.push("Haidrabad");
// console.log("Size :", cities.length);

// cities.push("Satara");
// console.log("Size: ", cities.length);

//*Any type of values can be stored like String , boolean , array , object etc..

// var arr = ["abc", true, 100, ["pune"], { name: "suhag mohinkar" }];

// console.log(arr);

// console.log(typeof arr[0]);
// console.log(typeof arr[1]);
// console.log(typeof arr[2]);
// console.log(typeof arr[3]);
// console.log(typeof arr[4]);

// var cities = ["Pune", "Nagpur", "Kolkata"];

// console.log(cities[0]);

//*replace

// cities[0] = "Satara";

// console.log(cities);

//*add an element

// cities[2] = "Pune";
// cities[5] = "Mumbai";  //never mention like this
// cities[cities.length] = "Mumbai";
// console.log(cities);

//*remove an element

// delete cities[1];
// console.log(cities);

//above solutions are not the proper way

//*Methods of an array

var cities = ["pune", "Haidrabad", "Nagpur", "Kolkata"];

// Adding elements

//push(element) :- adds an element at the end of an array , and returns number of elements after addition

// cities.push("Chimur");

// console.log(cities);

//unshift(element) :- adds an elemtent at the start of an array and returns total number of elements of an array

// cities.unshift("Bhisi");
// console.log(cities);

//Remove an elements

//pop() :- remove and returns last element

// var last = cities.pop();
// console.log(last);
// console.log(cities);

//shift() :- remove and returns first element

// console.log(cities.shift());
// console.log(cities);

// insert and remove the middle element
//splice(index) :-remove the elements from provided index to the end of

// cities.splice(1);
// console.log(cities);

//splice(index,deletCount) :- remove total elements equals to deleteCount starting from the provided index

// cities.splice(1, 2);
// console.log(cities);

//splice(index, deleteCount, eleoInsert) :- removes elements equals to deleteCount from the provided index and insert the arguments provided after the deleteCount

// cities.splice(1, 1, "Sangli");

// cities.splice(1, 2, "sangli", "Satara", "Nashik");
// cities.splice(1, 0, "sangli", "Satara", "Nashik");
// cities.splice(cities.length, 0, "sangli", "Satara", "Nashik");

// console.log(cities);

//*lenght property :- it returns total number of elements in an array

// console.log(cities.length);

//*includes(element) :- returns true  if the array contains the provided element, othervise returns false

// console.log(cities.includes("pune")); //true

// console.log(cities.includes("gadpipari")); //false

//*reverse() :- reverse the order of elements

// console.log(cities);
// cities.reverse();
// console.log(cities);

//*sort() :- sorts the array elements based on their character codes

// var arr = ["B", "A", "c", "Z", "h", "a", "r"];
// console.log(arr);
// arr.sort();              // arrange the elements on the alphabetical order, it give the priority to the first capital word then smaller word
// console.log(arr);

var num = [2, 4, 7, 44, 2, 55, 2, 55, 8, 77, 88, 55, 3, 8, 9, 9, 53, 1];
num.sort();
console.log(num);

//we need to write function for arrange the number in numerical order

// function(a,b){
//     return a-b;
// }

// if returns
// 0, it means a==b
// -ve , it means a<b
// +ve , it means b>a

//accending order
num.sort(function (a, b) {
  return a - b;
});
console.log(num);

//decending order
num.sort(function (a, b) {
  return b - a;
});
console.log(num);
