// #!/usr/bin/env node

'use strict';
/*
TYPE OF OPERATOR
console.log(typeof )

limitations array, object, null...will all return object 
*/
/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */

/*
I:  Any value
O: returns boolean value depending on the type of value passed
C: N/A
E: N/A
*/
function isArray(value) {
    // YOUR CODE BELOW HERE //
    let result = (Array.isArray(value));
    //  Test if value is an array
    //  returns result
    return result;
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
function isObject(value) {
    // YOUR CODE BELOW HERE //
    let result = (
        typeof value === 'object' &&  //  tests if value IS object
        value !== null &&   //  tests if value is NOT equal to null
        !Array.isArray(value)&& //  tests if value is NOT equal to an array
        Object.prototype.toString.call(value) !== '[object Date]'); //  tests if value is NOT a date
    return result;  //  returns result
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //
    let result = ( //  initialize result
        (Array.isArray(value)   ||  typeof value === 'object') &&  //  tests if the value IS an array OR object
        value !== null  &&  //  tests if the value is NOT equal to null
        Object.prototype.toString.call(value) !== '[object Date]'//  tests if the value is NOT a date
    );
    return result;//  returns result
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */

/*
I: function takes a value
O: function returns the value type as a string
C: N/A
E: N/A
*/
function typeOf(value) {
    // YOUR CODE BELOW HERE //
    let strValue = "";//  initialize strValue
        if (typeof value === 'object'){//  tests if value is an object
            if (Array.isArray(value)){//  if true, tests if it is an array
                strValue = "array";//  if true, assigns strValue to "array"
            }else if (Object.prototype.toString.call(value) === '[object Date]'){//  tests if is a date
                strValue = "date";//  if true, assigns strValue to "date"
            }else if (value === null){//  tests if is equal to null
                strValue = "null";//  if true, assigns strValue to "null"
            }else {//  any other condition
                strValue = "object";//  assigns strValue to "object"
            }
        } else {    //  any other condition
            strValue = typeof value;
        }
        //  assigns strValue to a string of the value type
    
    
    return strValue;//  return strValue
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
