//String concatenation

// var str = "suhabcg abcMohinabckar ";
// var subs = "abc";
// var count = 0;
// for (var i = 0; i < str.length; i++) {
//   if (str.substr(i, subs.length) == subs) count++;
// }
// console.log("Count :", count);

//includes :

// var name = "Suhag Mohinkar";

// console.log(name.includes("Suhag")); //true
// console.log(name.includes("suhag")); //false

//Character set :
// 1.CharAt(index)
//2.charCodeAt(index)

// var name = "Suhag Mohinkar";

// console.log(name.charAt(0));
// console.log(name.charAt(6));

// console.log(name.charCodeAt(0));

//example
// var str = " syutkdsssdjjkdfissss";
// var count = 0;
// for (var i = 0; i <= str.length; i++) {
//   if (str.charAt(i) == "j") count++;
// }
// console.log("Count : ", count);

//example
// var str = " syutkdsssdjjkdfissss";
// var count = 0;
// for (var i = 0; i <= str.length; i++) {
//   if (str.charCodeAt(i) == 83) count++;
// }
// console.log("Count : ", count);

//Find number of digits in an alphanumeric string.

// var char = "dhfud824kdkf54621sdfjd";

// var count = 0;
// for (var i = 0; i <= char.length; i++) {
//   if (char.charCodeAt(i) >= 48 && char.charCodeAt(i) <= 57) count++;
// }
// console.log("Count :", count);

//Find the number of alphabets in a alphanumeric striing

// var char = "dhfud824kdkf54621sdfjd";

// var count = 0;
// for (var i = 0; i <= char.length; i++) {
//   if (char.charCodeAt(i) >= 97 && char.charCodeAt(i) <= 123) count++;
// }
// console.log("Count :", count);

// Split(Separator):- returns an array if substring divided based on the separator.

// var str = "abc def ghi. jkl mno pqr. stuv wxyz";

// var arr = str.split(",");
// console.log(arr);

// console.log(str.split());

//Reverse a string

// var name = "Suhag Mohinkar";

// console.log(name.reverse()); //reverse is not a any function for the string

// first way to reverse the string

//convert the string an array
// var arr = name.split("");

//revers the array
// arr.reverse();

// console.log(arr.reverse());

// // convert array into string

// var rname = arr.join("");

// var rname = name.split("").reverse().join("");
// console.log(rname);

//second way to reverse the string

// var rname = "";

// for (var i = 0; i < name.length; i++) {
//   rname = name.charAt(i) + rname;
// }

// console.log(rname);

//*String concatenation  : addition of extrnal string

//There are two ways to concate a string
//1.concat() function

// var name = "Suhag Mohinkar";
// console.log(name.concat(" Gadpipari"));

//2.By using '+' operator

// var name = "Suhag Mohinkar";
// name = name + " At. Gadpipari";
// console.log(name);

//*trim():- remove blank spaces from start and end of a string

// var str = "             fdfasdff ";
// console.log(str);
// console.log(str.trim());

//Changing the cases ,Lowercase- Uppercase ,Uppercase- Lowercase

var str = "Suhag Mohinkar";

console.log(str.toLocaleLowerCase());
console.log(str.toLowerCase());
console.log(str.toLocaleUpperCase());
console.log(str.toUpperCase());

// console.log(str.charCodeAt(0));

// //get character from a character code
// console.log(String.fromCharCode(78));
// console.log(String.fromCharCode(338));
// console.log(String.fromCharCode(755));

//Check the string is pallindrom or not 
//Solution first
// var str = "madam";
// var str = "NiTin";
// var str = "suhag";

// var rstr = str.split("").reverse().join("");

// if (str.toLowerCase() == rstr.toLowerCase()) {
//   console.log("It is a pallindrom");
// } else {
//   console.log("Not a pallindrom");
// }

//Solution Second

str = "maddafm";
var flag = true;
for (var i = 0, j = str.length - 1; i < j; i++, j--) {
  if (str.charAt(i) != str.charAt(j)) {
    flag = false;
    break;
  }
}
if (flag) {
  console.log("pallindrom");
} else {
  console.log("Not a pallindrom");
}
