/**
 * FUNCTIONS:
 * 0.   A function is a set of statements that perform a task or calculates or values.  The function should perform a task *
 *      or return a value obviously related to the input value.
 * 1.   The two phases of using a function are: declaration and calling/invoking/executing
 * 2.   Function parameters are placeholders for values that will be passed later when the function is called.  Function*
 *      arguments are what we call the values we pass into functions when the function is invoked.
 * 3.   The syntax for a named function is the keyword function followed by the name of the function, the parameters*
 *      in parenthesis, and the code block inside of curly braces.
 * 4.   In a function expression, a variable is declared and assigned the value of a function
 * 5.   Functions do not have to take inputs or return a value.  We specify a return value by using the keyword return*
 *      followed by the the value we wish to return.
 * 6.   Functions can access or modify values in parent or global scopes.  Functions in the parent scope cannot access*
 *      or modify values in child scopes.
 * 7.   Functions form closures inside of their code block they house.  If the function returns an object and that value*
 *      is referenced outside of the function's code block, that data stays alive and continues to exist outside the* 
 *      function.
 * 
 */

//  1.  Declaration and Calling/Executing/Invoking  //

//  A function is declared with the keyword function followed by the function name, parameters in parentheiss, and *
//  code block in curly braces
function add(num1, num2){
return num1 + num2
}
console.log(add);   //  prints => [Function: add]

//  2.  Parameters  //
//  calling/executing/invoking a function by the function's name and replacing parentesis with arguments
console.log(add(2, 3)); //  prints => 5

//  3.  Named functions/Function Expressions    //
//  In named function an anonymous function is assigned to a variable
var sum = function(num1, num2){
    return num1 + num2;
}
console.log(sum);   // prints => [Function: sum]

//  4.  Function Expressions    //
//  A variable can be declared and assigned a function that resolves to a value
var func = add;
console.log(add)    // prints => [Function: add]

//  5.  Functions and Scope //
//  A child function can access or modify variables in global or parent scopes
 var globalVariable = 1; // variable declared in global 
 function asdf(){
    console.log(globalVariable);
 }
 asdf(); // prints => 1
 // A parent function does not have access to variables in their child scopes

 function seeThis(){
    var localVariable = "Still in here";
 }
 console.log(localVariable);    //  prints => ReferenceError: localVariable is not defined

 // 6. Closures //
 // A useful feature of functions is their ability to form closures.  Closures refer to 
 // a function with a preserved value.
 function multiply(factor){
    return function(number){
      return number * factor;
    }
   }
  var twoTimes = multiply(2);   //  create variable that binds the passed value of 2
  console.log(twoTimes);
  console.log(twoTimes(6)); //  prints => 12