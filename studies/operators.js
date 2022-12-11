/**
 * OPERATORS:
 * 
 * 0.  Operators in javascript allow us to manipulate and interact with our data.  They may *
 *     return new values, allow assignment or re-assignment of values, or allow us to apply *
 *     reason.
 * 1.  Assignment operators assign the value to our data.
 * 2.  Arithmetic  operators take two values and produces a new value using math.
 * 3.  Comparison operators are binary, meaning they act on two values, to produce a *
 *     boolean value.
 * 4.  Logical operators allow us to "reason" about booleans
 * 5.  Unary operators produces a string value type of value given to a value
 * 6.  Ternary operator (Also called Conditional operator) takes three values.  The first *
 *     value will resolve to true or false and one of the other two will be returned *
 *     depending on how the first value resolves 
 */  

//  1.  Assignment Operators //
//  Simple assignment operator "=" : Assigns the value of the right operand to the left operand.
var a = 7;
console.log(a)  // prints => 7
//  Addition assignment operator "+=" : Assigns the left operand the result of adding itself to the right operand.
a += 1;
console.log(a); // prints => 8
//  Subtraction assignment operator "-=" : Assigns the left operand the result of subtracting the right operand from itself
a -= 1;
console.log(a); // prints => 7
//  Multiplication assignment operator "*=" : Assigns the left operand the result of multiplying the right operand and itself.
a *= 2;
console.log(a); //  prints => 14
//  Division assignment operator "/=" : Assigns the left operand the result of dividing itself by the right operand.
a /= 2;
console.log(a); //  prints => 7
//  Remainder assignment operator "%=" : Assigns the left operand the remainder of dividing itself by the right operand.
a %= 2;
console.log(a); //  prints => 1

//  2.  Arithmetic Operators //
//  Addition operators '+' adds the value of two values
console.log(2 + 1); //  prints => 3
//  When adding a number to a string, the number is treated as a string
console.log(2 + "bang");    //  prints => 2bang
//  Subtraction operators '-' subtracts one value from another
console.log(2-1);   //  prints => 1
//  Multiplication operators '*' multiples one value with another
console.log(2 * 3); //  prints => 6
//  Division operators '/' divides the right number by the left
console.log(4 / 2); //  prints => 2
//  The Modulus or Remainder operator returns the remainder of dividing the right number from the left
console.log(3 % 2); //  prints => 1
//  The Increment '++' and the Decrement '--' operators increase a value by 1 or decreases a value by 1
console.log(1++);   //  prints => 2
console.log(2--);   //  prints => 1

//  3.  Comparison Operators    //
//  Comparison operators are used in logical statements to determine if variables or values equal each other or*
//  the difference between them.  Will always return a boolean value.
//  Equal to '==': determines if two values are loosely equal to each other
var x = 4
console.log(x == 4);    //  prints => true;
console.log(x == "4");  //  prints => true;
//  Strictly Equal to '===': Determines if two values are equal in both value and type
console.log(x === "4"); //  prints => false
//  Not Equal '!=':  Determines if two values are loosely not equal
console.log(x != 8);   //  prints => true
//  Strictly Not Equal '!==': Determines if two values are not the same valor or same type
console.log(x !== 4);   //  prints => false
console.log(x !== "4");     //  prints => true
//  Greater Than '>':   Determines if the left operand is a greater value than the right operand
console.log(5 > 2); //  prints => true
//  Less Than '<':  Determines if the left operand is less than the right operand
console.log(2 < 5);   //  prints => true
//  Greater Than Equal To '>=': Determines if the left operand is greater than OR equal to the right operand
console.log(2 >= 1) //  prints => true
console.log (1 >= 1);   //  prints => true
//  Less Than Equal To '<=':    Determines if the left operand is less than OR equal to the right operand
console.log(2 <= 5);    //  prints => true
console.log(2 <= 2);    //  prints => true

//  4.  Logical Operators   //
//  Logical operators are used to determine the logic between variables or values
//  And operator '&&':  Determines if values on either side are BOTH true
console.log(2 = 2 && 4 + 4);    //  prints => true
//  Or operator '||':   Determines if the right operand OR the left operand resolve to true
console.log(true || false); //  prints => true
//  Not '!' operator: Assigns the logical inverse to a value
console.log(!true);    //   prints => false

//  5. Unary Operators  // 
//  Bang "!":  The bang operator applies the logical inverse to a value or operator
console.log(!true); //  prints => false
console.log(1 !== 1);   //  prints => false
//  Type of 'typeof' operator: Returns the value type when placed before a value or variable
console.log(typeof 68); //  prints => number
var j = {
    a: 1
}
console.log(typeof j);  //  prints => object
//  Unary Negative '-': Returns its operand turned negative
var t = 3;
console.log(-t); // prints => -3

//  6.  Conditional Operator    //
//  The ternary or conditional operator assigns a value to a variable based on a specified condition.
//  After the variable declaration and equal sign, the condition is wrapped in parenthesis followed by
//  a question '?' mark, and lastly the values are entered on either side of a colon.
let drinkUp = (age < 21) ?  "Get out of here Narc!" : "Remember to tip";
var age = 39;
console.log(drinkUp);   //  prints => "Remember to tip"

