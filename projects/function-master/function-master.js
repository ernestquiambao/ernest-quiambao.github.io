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
    function nonFriends(name, data) {
        let notFriends = []; //  initialize notFriends array
        let person = {};    // initialize person object
        let contacts = [];  //  initialize contacts array
        for (var i = 0; i < data.length; i++){  // iterate through data
            if (data[i].name === name){//  test if name is same as current iteration name
                person = data[i];//  assign person with current iteration
            }else{  //  not same name
                contacts.push(data[i].name);    //  populate contacts
            }
        }
        for (var i = 0; i < contacts.length; i++){//  iterate though contacts
            if (!person.friends.includes(contacts[i])){//  test if contacts[i] is NOT in person.friends
            notFriends.push(contacts[i]);   //  push current name into notFriends
            }
        }
    return notFriends;  //  return notFriends array
    }
    //     // initialize notFriends array
    //     let notFriends = [];
    //     //  iterate through data array
    //     for (var i = 0; i < data.length; i++){
    //         //  push data[i].name into notFriends array
    //         notFriends.push(data[i].name);
    //     }
    //     // iterate through data array
    //     for (var i = 0; i < data.length; i++){
    //         //  test if data[i].name is name
    //         if (data[i].name === name){
    //             //  iterate through data[i].friends
    //             for (var i = 0; i < data[i].friends.length; i++){
    //                 //  test if data[i]. friends is an empty array
    //                 if (data[i].friends === []){
    //                     //  return notFriends;
    //                     return notFriends;
    //                 //  else data[i].friends is not an empty array
    //                 }else { 
    //                     //  iterate through data[i].friends
    //                     for (var j = 0; j < data[i].friends; j++){
    //                         //  remove current iteration value from notfriends
    //                         notFriends.splice(indexOf(data[i].friends[j], 1));
    //                         }
    //                 }
    //             }
    //         }
    //     }
    // return notFriends;
    // }
    //     let notFriends = [];    //  initializing return array notFriends
    //     for (var i = 0; i < data.length; i++){  //  iterate through array
    //         notFriends.push(data[i].name);   //  push name into notFriends
    //     } 
    //     for (var i = 0; i < name.friends; i++){  //  iterate through friends of name
    //         if (notFriends.hasOwnProperty(name.friends[i])){  //  testing if friends already exist
    //             notFriends.splice(i, 1);  //  deleting friend value from nonFriends
    //         }
    //     }
    //     for (var i = 0; i < notFriends.length; i++){  //  looping through notFriends
    //       if (notFriends[i] === name){  //  testing if name exists
    //         notFriends.splice(i, 1);  //  removing name
    //       }
    //     }
    //     return notFriends;  //  returns notFriends
    // }

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////
    // /* global updateObject */
    // QUnit.test("updateObject() : Should take an object, a key and a value. Should update the property <key> on <object> with new <value>. If <key> does not exist on <object> create it.", function(assert){
    //     var data = {a: "one", b: "two", "hokey": false};
    //     assert.deepEqual(updateObject(data, "b", "three"), {a:"one", b:"three", hokey: false});
    //     var data = {a: "one", b: "two", "hokey": false};
    //     assert.deepEqual(updateObject(data, "ponies", "yes"), {a:"one", b:"two", hokey: false, ponies: "yes"});
    //     var data = {a: "one", b: "two", "hokey": false};
    //     assert.deepEqual(updateObject(data, "a", Infinity), {a:Infinity, b:"two", hokey: false});
    //   });
function updateObject(object, key, value) {
    //  access object with key and assign it value
    object[key] = value;
    //  return object
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
    // /* global removeProperties */
    // QUnit.test("removeProperties() : Should take an object and an array of strings. Should remove any properties on <object> that are listed in <array>", function(assert){
    //     var data = {a: "one", b: "two", "hokey": false};
    //     removeProperties(data, ["a","hokey"]);
    //     assert.deepEqual(data, {b: "two"});
  
    //     var data = {a: "one", b: "two", "hokey": false};
    //     removeProperties(data, ["b"])
    //     assert.deepEqual(data, {a: "one", "hokey": false});
  
    //     var data = {a: "one", b: "two", hokey: false};
    //     removeProperties(data, []);
    //     assert.deepEqual(data, {a: "one", b: "two", "hokey": false});
    //   });
function removeProperties(object, array) {
    //  loop through array
    for (var i = 0; i < array.length; i++){
        //  test if current iteration property exists in object
        if (object.hasOwnProperty(array[i])){
            //  delete object property
            delete object[array[i]];
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
    // /* global dedup */
    // QUnit.test( "dedup() : Should take an array and return an array with all the duplicates removed", function( assert ) {
    //     var arrayOne = [1,2,2,2,3,4,5,5,5,5,"a","b","b","b","c"];
    //     var arrayTwo = ["hello", "hello", "hello", "hello", "hello", "world", "hello", "world", "world", "world"];
    //     assert.deepEqual(dedup(arrayOne), [1,2,3,4,5,"a","b","c"]);
    //     assert.deepEqual(dedup(arrayTwo), ["hello", "world"]);
    //   });
function dedup(array) {
    //  initialize newArr
    let newArr = [];
    //  iterate over array
    for (var i = 0; i < array.length; i++){
        //  tests if current iteration value exists in newArr
        if (newArr.indexOf(array[i]) === - 1){
            //  pushes current iteration value into newArr
            newArr.push(array[i]);
        }
    }
//  returns newArr
return newArr;
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