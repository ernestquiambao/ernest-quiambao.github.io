/**
 * DATATYPES 
 * 0.   For our program to work with different data, it has to know what kind of value it is to know what role it plays.
 *      An example of this is interacting with a number is different when interacting with a string of letters.
 *      There are two different types of data in Javascript: primitive and complex.  Primitive datatypes can hold a *
 *      single value and are passed to a function BY COPY.  Complex datatypes can hold multiple values grouped together*
 *      and are passed to functions BY REFERENCE.  
 * 
 * 1.   Boolean:    values are either true or false
 * 2.   Null:   an assignment value that means no value
 * 3.   undefined: means that a variable has not been declared or a variable has not yet been assigned a value
 * 4.   Number: Any number.  A value you can do perform math on
 * 5.   String: Anything that is a word or uses leters from the alphabet
 * 6.   Array:  A complex datatype that is capable of holding multiple properties grouped together in between square*
 *              brackets separated by a comma.
 * 7.   Object: A complex datatype that is capable of holding multiple property values in key: value pairs separated by a *
 *              comma.
 * 8.   NaN:    a value that means not a number
 * 9.   Infinity and -Infinity: Infinity is a number variable in the global scope that is larger than any number.  
 * 10.  Copy by reference VS Copy by Copy: When a variable referencing a primitive data type is assigned to another variable*
 *      another variable is created and assigned the same value as the 
 */

//  1. Boolean //
//  Values that return true or false are booleans
console.log(5 > 0); //  prints => true
console.log(0 > 5); //  prints => false

//  2. Null   //
//  A value that means specifically that there is no value
var noValue = null;
console.log(noValue);   //  prints => null
console.log(typeof noValue);    //  prints => object
//  Null will return falsy
console.log(!null);  //  prints => true

//  3. Undefined   //
//  A value that has been declared but not assigned a value will return undefined
var favFruit;
console.log(favFruit);  //  prints => undefined
console.log(yep);   //  prints => ReferenceError undefined

//  4. Number  //
//  A value that represents a number value.  Math can be performed on number values.
var age = 32;
var birthday = age + 1;
console.log(birthday);  //  prints => 33;

// 5. String   //
//  Values that represent words are called strings.  Strings must be placed in between quotation marks.
var nameFirst = "Ernest";
var nameLast = "Quiambao";
console.log(nameFirst + ' ' + nameLast);    //  prints => "Ernest Quiambao"
//  Strings, like arrays are zero indexed.  You can access individual characters by referencing the index
console.log(nameFrist[0]);  //  prints => E

//  6. Array   //
//  An array is a zero-index complex datatype.  This means that each element in an array is assigned an index 
//  starting at 0.  Different value properties in an array are stored separated by commas
//  within square brackets.
var numArray = [22, 18, 45];
console.log(numArray);  //  prints => [22, 18, 45]
//  Accessing elements in an array value is possible by referencing it's index in the array with bracket notation
console.log(numArray[0]);   //  prints 22
console.log(numArray[1]);   //  prints 18
console.log(numArray[2]);   //  prints 45

//  7. Object   //
//  An object is a complex data type that is capable of holding multiple properties in key: value pairs.  An object is 
//  not zero-indexed.  To reference values in an object you must reference the key.  The key is always a string value.
var genres = {
    horror: "21 Days Later",
    family: "Millions",
    drama: "Trainspotting"
}
console.log(genres.family); //  prints => Millions

//  8. NaN  //
//  The value of NaN is a number value representing a value that is not a number
var aye = a;
var bee = 37;
console.log(aye + bee); //  prints => NaN

//  9. Infinity and -Infinity   //
//  Infinity and negative infinity represent numbers that are larger than any other numbers
console.log(1/0);   //  prints => Infinity
console.log(-1/0);  //  prints => -Infinity

//  10. Copy by Reference vs Copy by Value  //
//  Primitive value types, when copied as copied by their actual value leaving the reference value unchanged.
let a = 9;
let b = "hello";
let c = a;
c = c + 1;  //  
console.log(c)  //  prints => 10
console.log(a)  //  prints => 9
//  Complex datatypes are copied by reference.  When a variable is assigned the value of an object or array, the variable*
//  points to the same value and either variable assignment can change the same value.
var originalArray = [1, 2, 3];
console.log(originalArray);  //  prints => [1, 2, 3];
var newArray = originalArray;
console.log(newArray);  //  prints => [1, 2, 3];
newArray[2] = "oops!"
console.log(originalArray); //  prints => [1, 2, 'oops!']
