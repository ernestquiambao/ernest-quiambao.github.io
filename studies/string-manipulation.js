/**
 * STRING MANIPULATION:
 * 0.   A string is a primitive zero-indexed datatype that represent texts.  Javascript includes many built-in ways to 
 *      manipulate strings.
 * 
 */


//    String Operators    //
//  To build or concatenate strings, the "+" and "+=" operators can be used.  They do not add, they fuse strings together.
var firstName = "Ernest";
var lastName = "Quiamnbao";
var fullName = firstName + " " + lastName;
console.log(fullName);  //  prints => Ernest Quiambao
let a = "This and ";
let b = "That";
console.log(a += b);    //  prints => This and That

//    Template Literals   //  
//  When you put something inside a template literal ${}, it's result will be resolved and converted to a string in that position.
console.log('two times two is ${2*2}');  // prints => two times two is 4

//    String Access   //
//  Like arrays, strings are zero indexed and individual text characters can be accessed using bracket notation
var word = "GIANT";
console.log(word[0]);   //  prints => G

//    toUpperCase() and toLowerCase() //
//  To convert a string to lowercase or uppercase, use the .toUpperCase() or .toLowerCase()
let bestMovie = "Weekend at Bernies 2";
console.log(bestMovie.toUpperCase());   //  prints => WEEKEND AT BERNIES 2
console.log(bestMovie.toLowerCase());   //  prints => weekend at bernies 2

//  charAt()    //
//  .charAt() will return the character at the index placed in the parenthesis
console.log(word.charAt(2));    //  prints => A

//  concat()    //
//  .concat() will take two strings and return a new string with the two strings concatenated
let e = "Jimmy";
let c = "Buffet";
console.log(e.concat(c));   //  prints => JimmyBuffet

//  includes()  //  
//  .includes() will test if a string contains the string passed in the parenthesis and return a boolean
let stienbeckBook = "Of Mice and Men";
console.log(stienbeckBook.includes("Mice"));    //  prints => true

//  slice() //  
//  slice will extract part of a string and return a new string.  The first index is the start, and the second index is after it ends
console.log(stienbeckBook.slice(7, 10));    //  prints => Of Mice an

//  split() //
//  Will take a string and return an ARRAY of elements of the string.  The array elements will be separated at the character passed in the parenthesis
console.log(stienbeckBook.split(' '));  //  prints => [ 'Of', 'Mice', 'and', 'Men' ]

