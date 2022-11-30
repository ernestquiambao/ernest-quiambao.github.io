// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

// const { includes } = require("lodash");

var _ = {};  


/**
* START OF OUR LIBRARY!
* Implement each function below its instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/


_.identity = function(value){
    //  return value
    return value;
}

/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/

_.typeOf = function(value){
    //  test if value is a string
    if (typeof value === "string"){
        return "string";
    // test if value is an array
      }else if (Array.isArray(value)){   
        //  return string "array"
        return "array";
    //  else test if value is an object
    }else if (typeof value === "object" && value !== null && !(Array.isArray(value)) && !(value instanceof Date)){
        //  return object
        return "object";
    //  else test if value is undefined
    }else if (typeof value === "undefined"){
        //  return string "undefined"
        return "undefined";
    //  else test if value is a number
    }else if (typeof value === "number"){
        //  return "number"
        return "number";
    //  else test if value is a boolean
    }else if (typeof value === "boolean"){
        //  return string "boolean"
        return "boolean";
    //  else test if value is null
    }else if (value === null){
        //  return string "null"
        return "null";
    }else if (typeof value === "function"){
        //  return string "function"
        return "function";
    }
}
/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/

_.first = function(array, number){
    //  tests if array is not an array OR number is negative
    if (!(Array.isArray(array)) || number < 0){
            //  returns array literal
            return [];
    //  tests if number is not given OR NaN
    }else if (typeof number === 'undefined' || isNaN(number)){
            //  return first element of array
            return array[0];
    //  all other conditions
    }else{
            //  return first number items of array
        return array.slice(0, number);
    }
}

/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/

_.last = function(array, number){
    //  tests if array is NOT an array
    if (!(Array.isArray(array))){
        // return array literal
        return [];
    //  tests if number is not given OR NaN
    }else if (typeof number === 'undefined' || isNaN(number)){
        //  return last element of array
        return array[array.length - 1];
    // tests if array length is less than number
    }else if (array.length < number){
        //  returns array
        return array;
    //  all other conditions
    }else {
        //  return last number items of array
        return array.slice(array.length - number);
    }
}

/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/

_.indexOf = function(array, value){
    //  iterate through array
    for (var i = 0; i < array.length; i++){
        //  test if current iteration strictly equals value
        if (array[i] === value){
            //  return current iteration value
            return i;   
        }
    }
    return -1;
}

/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/

_.contains = function(array, value){
    //  loop through array
    return (array.includes(value)? true : false);
    
}

/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/

_.each = function(collection, func){
    //  determine if collection is an array
    if (Array.isArray(collection)){
        //  iterate through collection
        for (var i = 0; i < collection.length; i++){
            //  invoking func with the element, it's index, <collection>
            func(collection[i], i , collection) 
        }
     //  else it's an object
    } else {
        //iterate through collection
        for (let key in collection){
            //  invoking func with property's value, it's key, <collection>
            func(collection[key], key, collection);
        }
    }
return collection;
}

/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/

// _.indexOf = function(array, value){
//     //  iterate through array
//     for (var i = 0; i < array.length; i++){
//         //  test if current iteration strictly equals value
//         if (array[i] === value){
//             //  return current iteration value
//             return i;   
//         }
//     }
//     return -1;
// }

_.unique = function(array){
    //  initialize newArr
    let newArr = [];
    //
    for (var i = 0; i < array.length; i++){
        if (newArr.indexOf(array[i]) === - 1){
            newArr.push(array[i]);
        }
    }
return newArr;
}

/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/

_.filter = function(array, func){
    let newArray = [];
    for (var i = 0; i < array.length; i++){
        if (func(array[i], i, array)){
            newArray.push(array[i]);
        }
    }
    return newArray;
}

/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter()
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/

_.reject = function(array, func){
    let newArray = [];
    for (var i = 0; i < array.length; i++){
        if (func(array[i], i, array) === false){
            newArray.push(array[i]);
        }
    }
    return newArray;
}

/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/

_.partition = function(array, func){
    //  initialize new array with two sub arrays: falsey and truthy
    let newArr = [[], []];
    //  loop through array
    for (var i = 0; i < array.length; i++){
        //  call function for each element passing arguments(element, key, array)
        if (func(array[i], i, array) === true){
            //  pushing into newArray index 0
                newArr[0].push(array[i]);
            } else {
                newArr[1].push(array[i]);
            }
    }
return newArr;    
}
/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/

_.map = function(collection, func){
    //  initialize newArr
    let newArr = [];
    //  testing if collection IS an array
    if (Array.isArray(collection)){
        //  loop through array
        for (var i = 0; i < collection.length; i++){
            //  push, into newArr, the result of passing function with arguments: the element, it's index, collection
            newArr.push(func(collection[i], i, collection));
            }
    //  else is object
    } else {        
        //  loop through object
        for (var key in collection){
            //  push, into newArr, the result of passing function with arguments: the value
            newArr.push(func(collection[key], key, collection));
            }
        }
    //  return newArr
    return newArr;
}

/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/

_.pluck = function(array, property){
    //  return f
   return array.map(function(value){
    return value[property];
    });
}

/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/

_.every = function(collection, func){
    //  determine if collection is array
    if (Array.isArray(collection)){
        //determine if func wasn't passed in
        if (func === undefined){
            for (var i = 0; i < collection.length; i++){  //   iterate
            //determine if the current item is not truthy (faster)
            if (!collection[i]){
                // return false
                return false;
                }
            }
        }else {//  is array and func was passed
            for (let i = 0; i < collection.length; i++){
                //determine if current value return false when passed into func
                if (func(collection[i], i, collection) === false){
                    return false;
                }
            }
        }
    }else { // it was an object
        if (func === undefined){//  determine if current value returns false when passed into func
            for (var key in collection){// 
                if (!collection[key]){
                    return false;
                    }
                }
            }else { //  func is passed
                for (var key in collection){    //  iterate through object
                    if (func(collection[key], key, collection) === false){
                        return false;
                    }
                }
            }
    } 
    return true;
}
/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/
_.some = function(collection, func){
    if (Array.isArray(collection)){ //  test if collection is array
            if (func === undefined){ // test if func is not passed
                for (var i = 0; i < collection.length; i++){    //  loop through collection
                    if (collection[i]){ //  test if at least one item is true
                        return true;    //  return true
                    }else{ //  else
                        return false;//  return false
                    }
                }
            }else{  //  func is passed
                for (var i = 0; i < collection.length; i++){    //  iterate through collection
                    if (func(collection[i], i, collection) === true){    // Test if element is true
                        return true;    // return true
                    }else{  //  All elements are false
                        return false;
                    }
                }
            }
    }else { //  else collection is an object
        if (func === undefined){ //  test if func is not passed
            for (var key in collection){    //  iterate through object
                if (func(collection[key], key, collection)){    //  Test if element is true
                    return true;    //  return true
                }else{  // else all elements are falsey
                    return false;//  return false;
                }
            }
        }
    }
    return true;
}


/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/

//seed value initializes return value
//reult = 0
//iterate through array
    //  0
        //retult = func(0, 1, 0, [...])
_.reduce = function(array, func, seed){
    //  create result variable
    let result;
    //  determine if seed did not receive a value
    if (seed === undefined){
        result = array[0];
        for (let i = 1; i < array.length; i++){ //  iterate through array at 1 index
            result = func(result, array[i], array, i);  //
        }
    } else {    //  else it did
        result = seed;
        for (let i = 0; i < array.length; i++){
            result = func(result, array[i], array, i);
        }
    }

return result;
}

/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
