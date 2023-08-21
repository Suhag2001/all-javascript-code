// String

var varName = "Suhag Mohinkar";

// console.log(varName.length);
//indexOf start from the right to left
// console.log(varName.indexOf("ag"));
// console.log(varName.indexOf("a", 6));

//lastIndexOf start from the left to right
// console.log(varName.lastIndexOf("a"));
// console.log(varName.lastIndexOf("a", 5));

// search
// console.log(varName.search("hin"));
// console.log(varName.search("[3-7]"));

// to check the substring exits or not

// includes
console.log(varName.includes("Suhag"));

// 1.slice  - it accept both positive and negative index

// (start index, end index)

// console.log(varName.slice(2, 8));
// console.log(varName.slice(4));

// console.log(varName.slice(-2));
// console.log(varName.slice(-6, -2));

// 2.substring - not accept negative index

// (start index, end index)

// console.log(varName.substring(2));
// console.log(varName.substring(2, 5));

// console.log(varName.substring(5, 2));
// console.log(varName.substring(2, 5));

// 3.substr

// (startIndex, length)

// console.log(varName.substr(6));
