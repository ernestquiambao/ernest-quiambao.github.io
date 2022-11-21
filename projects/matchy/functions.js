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

function add(animals, animal){ 
    let nameExists = false; 
    
    for (let i = 0; i = animals.length; i++){
        if(animals[i].name === animal.name){
                nameExists = true;
        }
    }
    if(nameExists === false){
        animals.push(animal); 
        }
    
    }

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
