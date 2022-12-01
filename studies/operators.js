/**
 * OPERATORS:
 * 
 * 0.  Operators in javascript allow us to manipulate and interact with our data.  They may *
 *     return new values, allow assignment or re-assignment of values, or allow us to apply *
 *     reason.
 * 1.  Assignment operators assign the value to our data.
 * 2.  Arithmetic  operators take two values and produces a new value.
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