//* error handling
//Error is an unexpected condition raised at the time of program execution.

//If error raised then it terminates the execution of the whoke progrm .

// To avoid teh program teramination due to an error, you to handle the error .

//* Error handling has below benefits :-
//  - execution of the program does not terminate, only part of the program does not gets executed

//  -You can provide alternative solution to the statements where the error raised .

//  -You can display user friendly messages to the user so he/she can know what is the problem with the application .

//* How to handle the error ?

//  There are blocks to handle the error  like :-

//  1.try
// -try block is used to write the statements which raise an error.
// -if error raised in the try block  then the remaining statements of the current try block will not get execute despite error handling.
// -try block can be followed by either catch or finally blocks
// -if you write catch and finnaly blocks after the try then catch block must before finally.

//  2.catch
//  -catch block gets executed only if error raised in the try block .
//  -catch block accepts an error object as a parameters.
//  -catch must be  immediately after the try block and before the finally .
//  -catch block is used to execute some alternative solution to the statements of the try block .
//  -catch block is used to display error messages to the user .
//  -catch block is used to log the errors to log file or console .

//  3.finally
//  -finally block gets always executed despite error .
//  -finally block is used to release / close the resources (db connection , file objects etc .) .
//  -finally block cannot handle the error alone .

//examples : -

console.log("first");
console.log("second");
try {
  console.log("try before");
  console.log(myVar);
  console.log("try after");
} catch (e) {
  console.log("internal error try again!");
} finally {
  console.log("i will execute always");
}
console.log("third");
