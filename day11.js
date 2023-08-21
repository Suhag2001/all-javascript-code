// var num = [10, 20, 30, 40, 50, 60, 70, 80, 90];

//*toString :- array to string conversion

// var str = num.toString();

// console.log(typeof num); // type of array is by default object
// console.log(typeof str); // by using tostring we convert the typeof array into the string
// console.log(str); // it will give the output without bracket

//*join() :- join the elements of the array

// var str = num.join(" ");

// var str = num.join("-");
// console.log(str);

//*iterating array elements

//arrayName[index]

// *general for loop
// for (var i = 0; i < num.length; i++) {
//   console.log(num[i]);
// }

//*for in
//for(variable declaration in arrayName){}

// for (var i in num) {
//   var n = parseInt(i) + 1;
//   console.log(n + " - " + num[i]);
// }

//*for of
//for(variable declaration of arrayName){}

// for (var i of num) {
//   console.log(i);
// }

//*forEach() :- method

// num.forEach(function (value, index, array) {
//   console.log(index + 1 + " - " + value);
// });

//forEach() accepts a callback function and calls that functions once for each element in the array

//forEach() function does not return anything
// console.log(num);

// num.forEach(function (val, ind, arr) {
//   arr[ind] = val * 2;
// });

// console.log(num);

// var cities = ["Pune", "Mumbai", "Nashik", "Nagpur"];

// var newCities = [];

// console.log(cities);
// cities.forEach(function (city, i, arr) {
//   arr[i] = city.toUpperCase();
//   // console.log(city);
// });
// console.log(cities);

//*map() function :- accepts a callback function as an arguments m calls that function on each element of the array
// and returns a new array of the values retured by the callback function.

// var cities = ["pune", "mumbai", "satara", "sangli"];

// var newCities = cities.map(function (city, i, arr) {
//   return city.toUpperCase();
// });

// console.log(newCities);

// print the output from above array : [4,6,6,6]

// var outarr = cities.map(function (city, i, arr) {
//   return city.length;
// });
// console.log(outarr);

// task : Remove the cities start with 'S' or 's'

var cities = ["pune", "mumbai", "Solapur", "satara", "Nashik", "sangli"];

//Below method give the some wrong output
// cities.forEach(function (city, i, arr) {
//   if (city.charAt(0) == "S" || city.charAt(0) == "s") {
//     arr.splice(i, 1);    // splice is use for the delete the values
//   }
// });
// console.log(cities);

//we are using the general for for perfect output

// for (var i = 0; i < cities.length; i++) {
//   var ch = cities[i].charAt(0);
//   if (ch == "s" || ch == "S") {
//     cities.splice(i, 1);
//     i--;
//   }
// }

// console.log(cities);

//task : get a new array with cities which does not start with "s"  and "S"

//*filter() function  :-  filter function return the value
// var newCities = cities.filter(function (city, i, arr) {
//   return city.charAt(0) == "S" || city.charAt(0) == "s";
// });

// console.log(cities);
// console.log(newCities);

//task : find the even numbers from the given array

// var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// var newNums = nums.filter(function (num, i, arr) {
//   return num % 2 == 0;
// });

// console.log("even number : ", newNums);

//task : find the odd number from the given array

// var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// var newNums = nums.filter(function (num, i, arr) {
//   return num % 2 != 0;
// });

// console.log("Odd number : ", newNums);
