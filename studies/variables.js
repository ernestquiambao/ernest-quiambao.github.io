/**
 * VARIABLES:
 * 
 * 0.  To store things in memory duing the life-cycle of our program, we can use variables.  Variables have names or *
 *   identifiers that can point to different values or data-types.  Strings, numbers, booleans, arrays and objects *
 *   are all examples of data-types that can be stored and idenitfied by variables.  Variables can also have their *
 *   values changed during the life-cycle of our program.
 * 
 * 1.  Variables are created using the keyword, var, followed by the name (id or alias) we wish to assign to our variable.
 * 
 * 2.  There are two phases of using variables: declaration and assignment.
 * 
 * 3.  When declaring variables, var, let and const can be used.  Different variable declarations will have an effect on where*
 *    the variables can be accessed; also called Scope.  Var, let and const declarations have differences in how Javascript *
 *    interprets the code.  Depending on which declarations are used, the variables are hoisted differently.  
 */  

//  1.  Declaration //
//  When a variable is first declared, it's value is undefined
var nameFirst;
console.log(nameFirst);  //  prints => undefined

//  2.  Assignment  and Re-assignment   //
//  After a variable is declared it can be assigned or initialized a value
name = "Ernest";
console.log(nameFirst) // prints => Ernest

//  After a variable has been assigned an initial value, it can be updated indefinitely with a new value
nameFirst = "Big Ern";
console.log(nameFirst) // prints => Big Ern
nameFirst = "Ern Dawg"; 
console.log(nameFirst);// prints => Ern Dawg

//  3.  var, let and const  //
//  Let and const are block-scoped only.  
let greeting = "Yo Meng";
let x = 4;

if (x > 1)  {
    let high = "Chingadera";
    //  accessing high within declared block scope
    console.log(high);  //  prints => Chingadera
}
//  accessing high outside the scope it is declared
console.log(high);  // prints => ReferenceError: high is not defined

//  const variables are block scoped and cannot be updated.  However *
//  if a const variable is an object, its properties can be updated
if (x < 10){
    const bond = "James Bond";
    console.log(bond);  //  prints => James Bond
}
console.log(bond);  //  prints => ReferenceError: bond is not defined

const listOfStuff = {};
console.log(listOfStuff);   //  prints => {}
listOfStuff.books = {
    "Stienbeck": "East of Eden",
    "Some Genious": "Hamlet 2"
}
console.log(listOfStuff);   //  prints => { books: { Stienbeck: 'East of Eden', 'Some Genious': 'Hamlet 2' } }

//  var variable declarations are hoisted globally, while let and const stay in their own scope
console.log(varVar);    //  prints => undefined
console.log(letVar);    //  prints ReferenceError: letVar is not defined
console.log(constVar);  //  prints ReferenceError: constVar is not defined
var n = 9;
if (n < 0){
  const constantVar = "Stays right here";
  let letVar = "Stays here too";
  var varVar = "Peekaboo!";
}
//  accessing var variable globally
varVar = "I see you!"  
console.log(varVar);    //   prints => "I see you!"
//   letVar outside it's scope is not defined
console.log(letVar);    //  prints => ReferenceError letVar is not defined
