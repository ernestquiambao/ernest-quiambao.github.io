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
