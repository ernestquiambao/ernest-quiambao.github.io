//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// creating function called objectVales that takes an object parameter 
function objectValues(object) {
    let newArr = []; // creating a new variable newArr and assigning it an empty array 
    // creating a for in loop to itearte through the input object 
    for(var key in object){
        newArr.push(object[key]); // pushing the values of the keys of input object into the created array 
    }
    return newArr; // return new array filled with values from input object 
    } 
    

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    let newArr = []; // creating a new variable newArr and assigning it an empty array 
    // creating a for in loop to itearte through the input object 
    for(var key in object){
        newArr.push(key); // pushing the the keys of input object into the created array 

}
return newArr.join(" ") // joining the array to make it a string adding a space to the strings of the input key 
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    let newArr = []; // creating a new variable newArr and assigning it an empty array 
    // creating a for in loop to itearte through the input object 
    for(var key in object){
    if (typeof object[key] === "string"){
        newArr.push(object[key]); // pushing the the keys of input object into the created array 

}

}
return newArr.join(" ") // joining the array to make it a string adding a space to the strings of the input key 
}
//var objectOne = {a: "one", b: "two", ponies: "crayons", something: {}, dingle: "dangle"};

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    let arr = "array"; // creating variable arr and setting it equal to a string of array 
    let obj = "object"; // creating variable and setting it equal to a string of object 
    if (Array.isArray(collection)){ // using array.isarray to determine is collection is an array 
        return arr; // if true return arr 
    }   else {
        return obj; // if not return object 
    }

}
//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    let strArr = [];
    for (var i = 1; i < string.length; i++){
        strArr.push(string[i])
    }
    strArr.unshift(string[0].toUpperCase());
    return strArr.join("");

}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
   
//split the above string into an array of strings 
//whenever a blank space is encountered

const newArr = string.split(" ");

//loop through each element of the array and capitalize the first letter.


for (var i = 0; i < newArr.length; i++) {
    newArr[i] = newArr[i].charAt(0).toUpperCase() + newArr[i].slice(1);

}

//Join all the elements of the array back into a string 
//using a blankspace as a separator 
const str2 = newArr.join(" ");
console.log(str2);
return str2;

//Outptut: I Have Learned Something New Today
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    let capName = object.name.charAt(0).toUpperCase() + object.name.slice(1);
    let str = "Welcome " + capName + "!";

    return str;
}
//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    let animalName = object.name.charAt(0).toUpperCase() + object.name.slice(1);    //  assign animalName the name capitalized
    let animalSpecies = object.species.charAt(0).toUpperCase() + object.species.slice(1);
    let str = animalName + " is a " + animalSpecies
    return str;
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
    // /* global  maybeNoises*/
    // QUnit.test("maybeNoises() : Should take an object, if this object has a noises array return them as a string separated by a space, if there are no noises return 'there are no noises'", function(assert){
    //     assert.equal(maybeNoises({noises:["bark", "woof", "squeak","growl"]}), "bark woof squeak growl");
    //     assert.equal(maybeNoises({noises: []}), "there are no noises");
    //     assert.equal(maybeNoises({}), "there are no noises");
    //   });
function maybeNoises(object) {
    if (object.hasOwnProperty("noises")){   // test if object has noises property
        if (object.noises.length > 0){
            return object.noises.join(" ");
        }   else{
            return "there are no noises";
        }
    }else{
        return "there are no noises";
    }
}


//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
    // /* global  hasWord*/
    // QUnit.test("hasWord() : Should take a string of words and a word and return true if <word> is in <string of words>, otherwise return false.", function(assert){
    //     var data = "This is a super awesome string of words";
    //     assert.strictEqual(hasWord(data, "awesome"), true);
    //     assert.strictEqual(hasWord(data, "words"), true);
    //     assert.strictEqual(hasWord(data, "turtle"), false);
    //   });
    function hasWord(string, word) {

        let newArr = string.split(" "); 
        for(var i = 0; i < newArr.length; i++){
            if (newArr[i] == word){
                return true; 
            }
        }
    
        return false; 
    }
//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
    // /* global addFriend */
    // QUnit.test("addFriend() : Should take a name and an object and add the name to the object's friends array then return the object", function(assert){
    //     assert.deepEqual(addFriend("lester", {friends:[]}), {friends:["lester"]});
    //     assert.deepEqual(addFriend("jimmy", {friends:["bobby","jones"]}), {friends:["bobby", "jones", "jimmy"]});
    //   });
function addFriend (name, object) {
    object.friends.push(name);
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
    // /* global isFriend */
    // QUnit.test("isFriend() : Should take a name and an object and return true if <name> is a friend of <object> and false otherwise", function(assert){
    //     assert.equal(isFriend("jimmy",{friends:["bobby", "ralf"]}), false);
    //     assert.equal(isFriend("ralf",{friends:["bobby", "ralf"]}), true);
    //     assert.equal(isFriend("chuck",{}), false);
    //   });
    function isFriend(name, object) {
        if(object.hasOwnProperty('friends')){
            for(var i = 0; i < object.friends.length; i++){
                if(object.friends[i] === name){
                    return true; 
                }
            }
        }
        return false; 
        
        }

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
    // /* global nonFriends */
    // QUnit.test("nonFriends() : Should take a name and a list of people, and return a list of all the names that <name> is not friends with", function(assert){
    //     var data = [
    //       {name: "Jimmy", friends:["Sara", "Liza"]},
    //       {name: "Bob", friends:[]},
    //       {name: "Liza", friends: ["Jimmy"]},
    //       {name: "Sara", friends: ["Jimmy"]}
    //     ];
    //     assert.deepEqual(nonFriends("Jimmy", data), ["Bob"]);
    //     assert.deepEqual(nonFriends("Bob", data), ["Jimmy", "Liza", "Sara"]);
    //     assert.deepEqual(nonFriends("Sara", data), ["Bob","Liza"]);
    //   });
function nonFriends(name, array) {
    let notFriends = [];    //  initializing return array notFriends
    let people = [];
    for (var i = 0; i < array.length; i++){//  iterate through array
        people.push(array[i]); //   populate people array
    }
    for (var i = 0; i < people.length; i++){
        //  if 
    }
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {

}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {

}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {

}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}