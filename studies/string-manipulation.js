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

//  