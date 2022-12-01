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