/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function search(array, string){ //  creating function seach takes parameters array and string
    for (var i = 0; i < array.length; i++){ //  create for loop to iterate through array parameter
        if (array[i].name === string){  //  creating conditional statement to test if string strictly equals name index of the array
            return array[i];    //  returns array
        }

    }
    return null;    //  returns null if logic above not executed
}


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function replace(animals, name, replacement){   //  creating function replace with parameters animals, name, replacement
    for (var i = 0; i < animals.length; i++){//  loop through animals array
        if (animals[i].name === name){//  conditional statement that tests if name parameter exists in animals array
            animals[i] = replacement;   //  replace current object with replacement
    }
    }
}

//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function remove(animals, name){ //  creating function remove with parameters animals and name
    for (var i = 0; i < animals.length; i++){ //   for loop iterating through animals array
        if (animals[i].name === name){  //  conditional statement that tests if index is equal to string name
            animals.splice(animals[i]); //  deleting animals index
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// ## Step 4 - Add
//  1. Write a function declaration called `add` with a signature of `add(animals, animal) { //... }` that:
//    - Takes 2 parameter, an Array of animals, and an Object representing a new animal to be added.
//    - Checks that the animal Object has a `name` property with a length > 0.
//    - Checks that the animal Object has a `species` property with a length > 0.
//    - Has a **unique** name, meaning no other animals have that name.
//    - Adds this new Object to the `animals` Array, **only** if all the other conditions pass.
//    - Make sure it works.
function add(array, newObj){
    // if (newObj.name > 0 && newObj.species > 0){//  tests if newObj has name property greater than 0
        var objIndex = array.findIndex(function(arr){return arr.name == newObj.name});
        if (objIndex === -1){
            array.push(newObj);
            }
    }  
// }


/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
