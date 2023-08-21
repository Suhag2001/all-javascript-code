// // controle statements :-

// // conditional statement

// 1. if statement

// var a=20 , b=30;

// if(a>0 && b>0){
// console.log("Addition :",a+b);
// }

// //2. if else statement

// var num =8;   

// if(num%2==0){
//     console.log("The number is even number");
// }else {
//     console.log("the number is odd number");
// }

// // Code for the enter the value from the user

// const { rawListeners } = require("process");
// const readline = require("readline");

// const r1 = readline.Interface({
// input:process.stdin,
// output:process.stdout
// }
// );

// r1.question("Enter a number",function(num){
//     console.log("Your No: ",num);
// });

// // To check the number is even or odd from the user

// const{ rawListeners}= require("process");
// const readline = require("readline");

// const r2 = readline.Interface({
//     input:process.stdin,
//     output:process.stdout
// });

// r2.question("Enter the number to check which is even or odd : ",function(num){
//     if(num%2 == 0 ){
//         console.log("Enter the number is even number.");
//     }else{
//         console.log("Enter the number is odd number.");
//     }
// });

// // 3.Nested if

// // Find the greater number from the three number
for(var a=1 ; a <=10 ;a++){
    if(a==5){
        continue;
     }
 console.log(a);

}

var a=10, b=50 , c=50;

if(a>=b && a>=c){
    console.log(a," is a greater number a");
}else if(b>=a && b>=c){
        console.log(b," is greater number b");
    }
    else{
        console.log(c," is greater number c");
    }

// // 4.Switch case

// // Arithmetic operation by using if else

// var op = "*";
// var a = 10 , b=20;

// if(op=="*"){
//     console.log("mul:",a*b);
// }else if(op=="/"){
//     console.log("div:",a/b);
// }
// else if(op=="+"){
//     console.log("add:",a+b);
// }
// else if(op=="-"){
//     console.log("add:",a-b);
// }else{
//     console.log("Invalid operation");
// }

// // Arithmetic operation by using swich case

// switch(op){
//     case "+" : {
//         console.log("add : ",a+b);
//         break;
//     }
//     case "-" : {
//         console.log("sub : ",a-b);
//         break;
//     }
//     case "*" : {
//         console.log("mul : ",a*b);
//         break;
//     }
//     case "/" : {
//         console.log("div : ",a/b);
//         break;
//     }
//     default : {
//         console.log("Invalid operation");
//     }
// }

// // example : to check the months of environment

// var month = "feb";

// switch(month){

//     case "feb":{
//         console.log("summer");
//         break;
//     }
//     case "mar":{
//         console.log("summer");
//         break;
//     }
//     case "apr":{
//         console.log("summer");
//         break;
//     }
//     case "may":{
//         console.log("Mansoon");
//         break;
//     }
//     case "jun":{
//         console.log("Mansoon");
//         break;
//     }
//     case "jul":{
//         console.log("Mansoon");
//         break;
//     }
//     case "aug":{
//         console.log("Mansoon");
//         break;
//     }
//     case "sep":{
//         console.log("winter");
//         break;
//     }
//     case "oct":{
//         console.log("winter");
//         break;
//     }
//     case "nov":{
//         console.log("winter");
//         break;
//     }
//     case "dec":{
//         console.log("winter");
//         break;
//     }
//     case "jan":{
//         console.log("winter");
//         break;
//     }

// }

// // fall through behavior : exicuting everything after match the case

// var month = "oct";

// switch(month){

//     case "feb":
//     case "mar":
//     case "apr":
//     case "may":{
//         console.log("summer");
//         break;
//     }
//     case "jun":
//     case "jul":
//     case "aug":
//     case "sep":{
//         console.log("Mansoon");
//         break;
//     }
//     case "oct":
//     case "nov":
//     case "dec":
//     case "jan":{
//         console.log("winter");
//         break;
//     }

// }

// // Month enter  by the user

// const { rawListeners } = require("process");
// const readline = require("readline");

// const r1 = readline.Interface({
//   input: process.stdin,
//   output: process.stdout,
// });

// r1.question("Enter the month : ", function (month) {
//   switch (month) {
//     case "feb":
//     case "mar":
//     case "apr":
//     case "may": {
//       console.log("summer");
//       break;
//     }
//     case "jun":
//     case "jul":
//     case "aug":
//     case "sep": {
//       console.log("Mansoon");
//       break;
//     }
//     case "oct":
//     case "nov":
//     case "dec":
//     case "jan": {
//       console.log("winter");
//       break;
//     }
//   }
// });
