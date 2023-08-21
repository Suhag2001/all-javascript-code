// // simple for loop

// for (var i = 1, j = 10; i <= 10; i++, j--) {
//   console.log(i, "   ", j);
// }

// // Nested for

// for (var i = 1; i <= 3; i++) {
//   console.log(i, "outer");
//   for (var j = 1; j <= 3; j++) {
//     console.log(j, "inner");
//   }
// }

// 1234
// 1234
// 1234

for(var i =1; i<=3;i++ ){

    var str="" ;
    for(var j=1; j<=4;j++){
        str =str +" " +j;
    }
   
console.log(str);
}

// 111
// 222
// 333

// for(var i =1; i<=3;i++ ){

//     var str =" ";
//     for(var j=1; j<=3;j++){
//         str =str +" " +i;
//     }
// console.log(str);
// }

// 4444
// 3333
// 2222
// 1111

// for(var i =4; i>=0;i-- ){

//     var str =" ";
//     for(var j=1; j<=4;j++){
//         str =str +" " +i;
//     }
// console.log(str);
// }

// 4321
// 4321
// 4321
// 4321

// for(var i =4; i>0;i-- ){

//     var str =" ";
//     for(var j=4; j>0;j--){
//         str =str +" " +j;
//     }
// console.log(str);
// }

// 1 2 3 4
// 5 6 7 8
// 9 10 11 12
//below are the my logic

// for (var i = 1; i > 0; i--) {
//   var str = " ";
//   for (var j = 1; j <= 4; j++) {
//     str = str + " " + j;
//   }

//   console.log(str);
//   var sst = "";
//   for (var j = 8; j > 4; j--) {
//     sst = sst + " " + j;
//   }

//   console.log(sst);

//   var stt = "";
//   for (var j = 9; j <= 12; j++) {
//     stt = stt + " " + j;
//   }

//   console.log(stt);
// }

//right program for the above solution
// var k = 1;
// for (var i = 1; i <= 3; i++) {
//   var str = "";

//   for (var j = 1; j <= 4; j++) {
//     if (i % 2 != 0) {
//       str = str + " " + k;
//     } else {
//       str = k + " " + str;
//     }
//     k++;
//   }
//   console.log(str);
// }

// 1
// 22
// 333
// 4444

// for (i = 1; i <= 4; i++) {
//   var str = "";
//   for (j = 1; j <= i; j++) {
//     str = str + "" + i;
//   }
//   console.log(str);
// }

// 1
// 12
// 123
// 1234

// for (i = 1; i <= 4; i++) {
//   var str = "";
//   for (j = 1; j <= i; j++) {
//     str = str + "" + j;
//   }
//   console.log(str);
// }

// 5
// 45
// 345
// 2345
// 12345

// for (i = 5; i > 0; i--) {
//   var str = "";
//   for (j = 5; j >= i; j--) {
//     str = j + " " + str;
//   }
//   console.log(str);
// }

// 1
// 12
// 123
// 1234
// 12345

// for (i = 1; i <= 5; i++) {
//   var str = "";
//   for (j = 1; j <= i; j++) {
//     str = str + " " + j;
//   }
//   console.log(str);
// }

// 12345
// 2345
// 345
// 45
// 5

// for (i = 5; i > 0; i--) {
//   var str = "";
//   for (j = 1; j <= i; j++) {
//     str = str + " " + j;
//   }
//   console.log(str);
// }
