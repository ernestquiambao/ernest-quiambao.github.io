// #!/usr/bin/env node

'use strict';

/**
 * 1: reverseString()
 *
 *  a. Create a function called reverseString that takes a 
 *  String as its only input and returns a new String 
 *  representing the input String reversed.  For example:
 *  
 *      reverseString('hello');  // => 'olleh'
 * 
 * TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best? How do you know 
 *     when to stop looping?
 *  c. how do you access individual characters of a String?
 *  d. how do you concatenate Strings? What operator do we use?
 */

/*
I: function takes a string as a parameter
O:  function returns a string
C:  N/A
E:  N/A
*/

function reverseString(input) {
    // YOUR CODE GOES BELOW HERE //
    //  Initializing local array
    let newString = []; // initializing newString
    newString = [...input].reverse().join('');  // reassigning newString with the value of input in reverse
    return newString; //  returns newString
  
    //  returns array
    
    // YOUR CODE GOES ABOVE HERE //
}




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports.reverseString = reverseString;
}

// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: MY FIRST TEST
 * 
 * The point of this little exercise is to get you familar with how we role with 
 * working on and submitting assignments. You'll code, save, and check the tests.
 * You can preview the index html file to see all the tests that are currently passing
 * or failing. Save your code and hit the refresh button to see the current failing 
 * or passing test update.
 */

/** 
 * Given an input value, print the value to the screen using console.log().
 */
/*
I: function receives any value as a parameter
O: function logs the parameter to the console
C: N/A
E: N/A
*/
function print(value) {
  // YOUR CODE BELOW HERE //
  
    console.log(value);//  log value to the console
  
  // YOUR CODE ABOVE HERE //
}






// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.print = print;
}

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











// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/

/*
I: None
O: logs numbers 1-100, logs "Fizz" for multiples of 3, logs "Buzz" for multiples of 5, logs "FizzBuzz" for numbers which are multiples of both 3 and 5
C: N/A
E: N/A
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
    for (var i = 1; i < 101; i++){// loops from 1-100
        if (i % 3 === 0 && i % 5 === 0){//  checks if iteration number is a multiple of 3 and 5
            console.log("FizzBuzz");//  logs "FizzBuzz"
        }   else if (i % 3 === 0){//  checks if iteration number is a multiple of 3
            console.log("Fizz");//  logs "Fizz"
        }   else if (i % 5 === 0){//  checks if iteration number is a multiple of 5
            console.log("Buzz");//  logs "Buzz"
        }   else{//  any other condition
            console.log(i);//  logs iteration number
        }
    }

    // YOUR CODE GOES ABOVE HERE //
}


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}



// #!/usr/bin/env node

'use strict';

/** 
 * IN CLASS EXERCISE: Greeter App
 *
 * Using if, else-if and else, AND depending on the hour of the day, 
 * write a greeting program that prints a greeting to the screen like so: 
 *
 * // hour is 0-11
 * Good Morning!
 *
 * // hour is 12-16
 * Good Afternoon! 
 *
 * // hour is 17-21
 * Good Evening!
 *
 * // hour is 22-24 
 * Good Night!
 *
 * TIPS: 
 * 
 *   a. At what threshold does morning become afternoon? What comparison 
 *      can be used to test that the hour is within the morning threshold. 
 *      It's best to be consistant and use the SAME type of comparison for 
 *      each threshold. 
 *   
 *   b. Does the last threshold even need an else-if?
 * 
 *   c. The tests are CASE sensitive, so you MUST console.log('Good Night!') with
 *      the exact case.
 */

/*
I: Number representing time
O: Logs string greeting to screen
C:  N/A
E:  N/A
*/

function greeter(hour) {
    // YOUR CODE BELOW HERE //
    if (hour >= 0 && hour <= 11){ // checks if hour is between 0-11
            console.log("Good Morning!");
    }  else if (hour >= 12 && hour <= 16){ // checks if hour is between 12-16
            console.log("Good Afternoon!");//    Logs "Good Afternoon!"
    }   else if (hour >= 17 && hour <= 21){// checks if hour is between 17-21
            console.log("Good Evening!");//    Logs "Good Evening!"
    }   else {// checks if hour is between 22-24 
            console.log("Good Night!");//    Logs "Good Night!"
    
    }
    
    // YOUR CODE ABOVE HERE //
}

/*
 * To test our greeter when developing, we need to fake some input data, ie, 
 * the hour, so just change the input value to check your work.
 * 
 * In a more realistic setting, you might do something like this to get the 
 * actual system hour:
 *
 * var today = new Date();
 * var hour = today.getHours();
 */

greeter(11);



// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.greeter = greeter;
}



// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */

/*
I: takes array as parameter
O: logs array values
C: N/A
E: N/A
*/
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  //  loops over all values of array
  for (var i = 0; i < array.length; i++){
  //  logs array value
    console.log(array[i]);
  }
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */

/*
I: takes array
O: logs array values
C: N/A
E: N/A
*/
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  for (var i = array.length -1; i >= 0; i--){//  loops over array backwards
    console.log(array[i]);//  logs array value
  }
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
/*
I: function takes object
O:  function returns an array
C: N/A
E: N/A
*/
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  let array = [];// initialize array
  for (var key in object){//  loops over object
    array.push(key);//  logs keys
  }
  return array;// returns array
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */

/*
I: object
O: logs object's keys
C: N/A
E: N/A
*/
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  for (var key in object){//  loops over object
    console.log(key);//  logs object's key to console
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */

/*
I: object
O:  array containings object's values
C: N/A
E: N/A
*/
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  let array = [];// Initialize array
  for (var key in object){//  loops over object
    array.push(object[key]);// push object's values into array
  }
  return array;//  returns array
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */

/*
I: Object
O: logs object's values
C: N/A
E: N/A
*/
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  for (var key in object){//  loops over object
    console.log(object[key]);//  logs object's values
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */

/*
I: object
O: Number value of key/value pairs stored in object
C: N/A
E: N/A
*/
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  let array = [];//  Initialize array
  for (var key in object){//  loops over object
    array.push(key);// push key into array
  }
  return array.length;//return array length
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */

/*
I: object
O: print values in reverse
C:  N/A
E:  N/A
*/
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  let values = [];//  Initializing values
  for (var key in object){
    values.push(object[key]);//push values into values array
  }
  for (var i = values.length - 1; i >= 0; i--){//  Loop backwards through array
    console.log(values[i]);//  log array value
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}




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


// #!/usr/bin/env node

'use strict';

/**
 * 3: range()
 *
 *  a. Create a function called range that takes two integers as 
 *  parameters and returns an Array containing all integers 
 *  between the two parameters, inclusively.  For example:
 *
 *      range(8, 14);  // => [8, 9, 10, 11, 12, 13, 14]
 *
 *  If the first argument is greater than the second, 
 *  return the range in reverse order, ie:
 *
 *      range(14, 8);  // => [14, 13, 12, 11, 10, 9, 8]
 *
 *  TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best?
 *  c. you'll wanna make use of the push() method of Array.
 */

/*
I:  function takes two integers(NUMBERS) as parameters
O:  function returns an ARRAY [filled with values between the two passed integers]
*/
function range(start, end) {
    // YOUR CODE GOES BELOW HERE //
    let array = [];                         //  initialize array
    if (start < end){                       //  if start is less than than end
        for (var i = start; i <= end; i++){     //  use forward for loop to add values to array
            array.push(i);
            }
        } else {           //  if else start is greater than end  
        for (var i = start; i >= end; i--){     //  use backwards for loop to add values to array
            array.push(i);
            }   
        }        
    return array;//  return array
    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.range = range;
}



// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //

/*
I:  takes values ex: (1, 'Max', 'Gaudin')
O:  returns an object named contact
C:  N/A
E:  N/A
*/
function makeContact(id, nameFirst, nameLast) { //  FACTORY FUNCTION like createUser in lecture
    let contact = {//  initialize object contact
        id: '',
        nameFirst: '',
        nameLast: '',
    }
    contact.id = id;//  adds key value pair id: value
    contact.nameFirst = nameFirst;//  adds key value pair nameFirst: value
    contact.nameLast = nameLast;//  adds key value pair nameLast: value
    return contact;//  returns object contact
} 


function makeContactList() {    //  FACTORY FUNCTION will return an object.  Imagine that there is a contact list array = data>contact.json
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = [];
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },
        addContact: function(contact){
            contacts.push(contact); //  takes contact object and adds it contacts list
        },
        findContact: function(fullName){    //  how do i take a fullName and interact with the data to see if matches
            for (var i = 0; i < contacts.length; i++){    //    loops over contacts array 
                if (fullName === (contacts[i].nameFirst + " " + contacts[i].nameLast)){//  tests if fullName is equal to firstName plus lastName joined with a space
                return contacts[i]; //  returns contact
                }
            }      
        },
        removeContact: function(contact){
            contacts.splice(contact, 1);
        },
        printAllContactNames: function(){
            let allNames = [];  //  initialize allNames
            for (var i = 0; i < contacts.length; i++){//  loops over contacts array
                allNames.push(contacts[i].nameFirst + " " + contacts[i].nameLast);  //  pushes current fullname into allNames array
            }
            return allNames.join("\n"); //  returns allNames joined with new line
        }
    }    

}

// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}







