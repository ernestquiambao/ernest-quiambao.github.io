// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: stringy.js
 */

/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 */
function length(string) {
    // YOUR CODE BELOW HERE //
    
    // return the input string's length
    return string.length;

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to lowercase.
 */
function toLowerCase(string) {
    // YOUR CODE BELOW HERE //

    //  return string lowercase
    return string.toLowerCase();


    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to uppercase.
 */
function toUpperCase(string) {
    // YOUR CODE BELOW HERE //

    //  return string parameter uppercase
    return string.toUpperCase();

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to dash-case.
 *
 * Examples:
 *
 *      toDashCase('Hello World'); // => 'hello-world'
 *
 * TIP: How can you look for and replace a space in a String? How can you
 *      enforce lowercase? Look at the global replace link below, or, try String
 *      methods split and join?
 *
 *      See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Using_global_and_ignore_with_replace()
 */
function toDashCase(string) {
    // YOUR CODE BELOW HERE //
    //  declare a new string
    var newString;
    //  replace spaces in string with dashes
    newString = string.toLowerCase().replace(/ /g, '-');
    //  convert the string to lowercase
    //  return the new string
    return newString;
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * begins with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      beginsWith('Max', 'm'); // => true;
 *      beginsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */

/*
I: function takes a string input and a single character as parameters
O: returns a boolean value depending on the parameters
C:  N/A
E:  N/A
 */
function beginsWith(string, char) {
    // YOUR CODE BELOW HERE //
    let result = (string[0] === char.toLowerCase() || string[0] === char.toUpperCase());//  initializing result with the value of the statement that the first character of the first parameters is equal to the second parameter.
    return result;  //  returns result

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * ends with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      endsWith('Max', 'X'); // => true;
 *      endsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */

/*
I: function takes a string and a single character as parameters
O: function returns a boolean value
C: N/A
E: N/A
 */
function endsWith(string, char) {
    // YOUR CODE BELOW HERE //
    //  Assigning result the value of the statement: the first character of string equals char
    let result = (string[string.length - 1] === char.toLowerCase() || string[string.length - 1] === char.toUpperCase());
    //  returns result
    return result;

    // YOUR CODE ABOVE HERE //
}

/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 */

/*
I: the function takes two strings as parameters
O: the function returns one string
C: N/A
E: N/A
 */
function concat(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    // Initializes result with the two parameters concatenated into one
    let result = stringOne.concat(stringTwo);
    // Returns result
    return result;

    // YOUR CODE ABOVE HERE //
}

/**
 * Given any number of Strings, return all of them joined together.
 *
 * Example:
 *
 *      join("my", "name", "is", "Ben"); // => "mynameisBen";
 *
 * TIP: This Function pulls out all the arguments passed to it and stores them
 *      in an Array called args.
 */

/*
I: the function takes any number of strings as a parameter
O: the function returns all of the inputs joined together
C: N/A
E: N/A
*/
function join(one, two, three, four) {
    // YOUR CODE BELOW HERE //
    var args = [one, two, three, four];
    //  initialize result with all parameters in an array

    //  returns result joined 
    return args.join("");
    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *      longest("ben", "maggie");   //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?
 */

/*
I: function takes two strings as parameters
O: function returns one string
C: N/A
E: N/A
*/
function longest(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    if (stringOne.length > stringTwo.length){//  testing if the length of stringOne is greater than the length of stringTwo
        return stringOne; //  returns stringOne
    } else{ //  testing if the length of stringOne is less than the length of stringTwo
        return stringTwo;//  returns stringTwo
    }

    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return 1 if the first is higher in alphabetical order than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */

/*
I: function takes two strings as parameters
O: function returns 1, -1 or 0 depending on the parameters
C: N/A
E: N/A
*/
function sortAscending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    //  initializing result with the value of comparing stringOne and stringTwo alphabetically
    let result = stringTwo.localeCompare(stringOne);
    //  return result
    return result;
    // YOUR CODE ABOVE HERE //
}


/**
 * Given two Strings, return 1 if the first is lower in alphabetical order than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortDescending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //

    let result = stringOne.localeCompare(stringTwo);
    return result;


    // YOUR CODE ABOVE HERE //
}


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.length = length;
    module.exports.toLowerCase = toLowerCase;
    module.exports.toUpperCase = toUpperCase;
    module.exports.toDashCase = toDashCase;
    module.exports.beginsWith = beginsWith;
    module.exports.endsWith = endsWith;
    module.exports.concat = concat;
    module.exports.join = join;
    module.exports.longest = longest;
    module.exports.sortAscending = sortAscending
    module.exports.sortDescending = sortDescending;
}
