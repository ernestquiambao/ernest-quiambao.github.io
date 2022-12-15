// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function flatten(array) {
 return array.flat();
}

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
/*
Write a higher-order function loop that provides something like a for loop statement. 
It takes a value, a test function, an update function, and a body function. Each iteration, 
it first runs the test function on the current loop value and stops if that returns false. 
Then it calls the body function, giving it the current value. Finally, it calls the update 
function to create a new value and starts from the beginning.
*/
function loop(value, testFunc, updateFunc, bodyFunc) {
if (testFunc(value)){
  bodyFunc(value);
      return loop(updateFunc(value), testFunc, updateFunc, bodyFunc);
  }
return false;
}




// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function every(array, func) {
  for (var i = 0; i < array.length; i++){
    if (!func(array[i])){
      return false;
    }
    }
  return true;
  }


// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
//  we needed a data structure to keep count of ltr and rtl characters
function dominantDirection(string) {
// create arrays to store ltr and rtl
let ltr = [];
let rtl = [];
//  iterate through string
for (let i = 0; i < string.length; i++){
  //  initialize value to hold individual characters in string
    let script  = characterScript(string.charCodeAt(i));
    //  test if character is not null
    if (script !== null){
      //  test if direction is ltrr
      if (script.direction === 'ltr'){
        // if true, push script into ltr array
        ltr.push(script);
        // if false
      }else if (script.direction === 'rtl'){
        //  push script into rtl array
        rtl.push(script);
      }
  }
} //  test if ltr length is greater than rtl length
if (ltr.length > rtl.length){
  //  return 'ltr'
  return 'ltr';
  //  else
}else{
  //  return 'rtl'
  return 'rtl';
}
}

// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
