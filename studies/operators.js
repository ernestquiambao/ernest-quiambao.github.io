/**
 * OPERATORS:
 * 
 * 0.  Operators in javascript allow us to manipulate and interact with our data
 * 
 * 1.  Variables are created using the keyword, var, followed by the name (id or alias) we wish to assign to our variable.
 * 
 * 2.  There are two phases of using variables: declaration and assignment.
 */  

/*
assignment. allows 
arithmetic  operators take two values and produces a new value 
comparison operators are binary, meaning they act on two values, to produce a boolean value
logical operators allow us to "reason" about booleans
unary   produces a string value of the naming the value type of a given value
ternary

 */

//  1.  Declaration //
//  When a variable is first declared, it's value is undefined
var nameFirst;
console.log(nameFirst);  //  prints => undefined

//  2.  Assignment  //
//  After a variable is declared it can be assigned or initialized a value
name = "Ernest";
console.log(nameFirst) // prints => Ernest

//  3.  Re-assignment   //
//  After a variable has been assigned an initial value, it can be updated indefinitely with a new value
nameFirst = "Big Ern";
console.log(nameFirst) // prints => Big Ern
nameFirst = "Ern Dawg"; 
console.log(nameFirst);// prints => Ern Dawg