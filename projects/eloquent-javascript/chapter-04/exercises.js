////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/*
I: Takes a start(number) and end(number)
O: returns array
*/

function range(start, end, step){
  if (start === end || step < 0){ //  tests if start is equal to end OR step < 0
    return [];  //  returns empty array
  }else if (step === undefined){  //  tests if step was not passed
    var output = [];  //  initialize output array
    for (var i = start; i <= end; i++){ //  iterate from start to end
      output.push(i); //  populate output array
    }
  }else{//  else, step was passed
    var output = [];  // initialize output array
    for (var i = start; i <= end; i+=step){ //  iterate from start to end incrementing by step value
      output.push(i)  //  populate output array
    }
  }
  return output;  //  returning output array
  }



////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(array) { 
  if (array.length === 0){//  tests if array length is equal to 0
    return 0; //  return 0
  }
  return array[0] + sum(array.slice(1)); // returns first element of array plus the rest of the array
};

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

  
function reverseArray(array, output = []) {
  if (array.length === 0){ // tests if array length is 0
    return output;  //  returns output
  }
output.push(array[array.length - 1]); //  pushes last element into output array
return reverseArray(array.slice(0, array.length - 1), output) //  returns reverseArray function with array with last index removed, current output
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(array) {
  //  iterate through half of the array
  for (var i = 0; i < Math.floor(array.length / 2); i++) {
    //  store original 
    let original = array[i]; 
    //  replace current character with its opposite
    array[i] = array[array.length - 1 - i]; 
    //  replace opposite value with original
    array[array.length - 1 - i] = old; //set "opposite" to be original i value
  }
  //  return array
  return array;
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// WILL BE INPUT ARRAY OF NUMBERS 
function arrayToList(array) {
  let rest = null;

  for (let i = array.length - 1; i >= 0; i--){
    rest = {value: array[i], rest: rest}; 
  }
  return rest;
}


////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/// takes input object////returns array
function listToArray(list, output = []) {
// base
if (list.rest === null){
  output.push(list.value)
  return output;
}
// recursion access outer level
output.push(list.value);
return listToArray(list.rest, output);
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// function prepend, which takes an element and a list and creates a new list 
//that adds the element to the front of the input list,
function prepend(element, list) {
  let output = {};
  output.value = element;
  output.rest = list;
return output;
}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//takes a list and a number and returns the element at the given position in the 
//list (with zero referring to the first element) or undefined when there is no such element.
function nth(list, num){
  if (num < 0){
    return;
  }
  if (num === 0){
    return list.value;
  }
return nth(list.rest, num - 1)
}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual(x, y) {
  if (typeof x !== 'object' && typeof y !== 'object')//  determine if x and y are BOTH NOT objects
    return x === y;
  //  determine if either x or y is not an object
  if (typeof x !== 'object' || typeof y !== 'object'){
    return false;
  }
  //create arrays of objects keys
  let xKeys = Object.keys(x);// ['a']
  let yKeys = Object.keys(y);// ['a']
  //determine if xkeys and ykeys have different lengths
  if (xKeys.length !== yKeys.length){
    return false;
  }// iterate through keys to check if they match
  for (let i = 0; i < xKeys.length; i++){
    if (!yKeys.includes(xKeys[i]) || !deepEqual(x[xKeys[i]], y[yKeys[i]])){
      return false;
    }
  }
return true;
}
////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
