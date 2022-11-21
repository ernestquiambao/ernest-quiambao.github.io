/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// ## Step 1 - Object Creation
//  1. [ ] Open up the file data.js.
//  2. [ ] Create a variable named `animal` and assign it to an empty object.
//  3. [ ] Using **dot notation** give `animal` a **property** named `species` with a value of any animal species.
//  4. [ ] Using **bracket notation** give `animal` a **property** called `name` with a value of your animal`s name.
//  5. [ ] Using either notation, give `animal` a **property** called `noises` with a value of empty array.
//  6. [ ] Print your `animal` Object to the console by adding, `console.log(animal);`,
//  7. [ ] Save your work (command-s || ctrl-s), switch back to the browser tab with your website running, and refresh your page to see what `animal` looks like.
//  8. [ ] It should be something like: 
// ~~~JS
// { species: 'duck', name: 'Jennifer', noises: [] }
// ~~~

var animal = {};//  initializing variable animal with the value of an empty object
animal.species = "cat"; //  using dot notation to add species property with the value of cat
animal["name"] = "beau";  //  using bracket notation to add name property with value of beau
animal.noises = []; // adding noises property with the value of an empty array
console.log(animal);  //  logging animal object to console



//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// ## Step 2 - Array Creation
//  1. [ ] Create a variable named `noises` and assign it to an empty array.
//  2. [ ] Using **bracket notation** give `noises` it's first element. A string representing a sound your animal might make.
//  3. [ ] Using an array function add another noise to the end of `noises`.
//  4. [ ] Go to the array documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array?redirectlocale=en-US
//  5. [ ] Look through the functions until you find the one that will place an element at the begining of the array.
//  6. [ ] Add an element to `noises` using this function.
//  7. [ ] Using **bracket syntax** again, add another element to the end of `noises`. Make sure that the way you do this step would work no matter how many elements `noises` had. In other words, don't hard code the position of the new element.
//  8. [ ] `console.log` the length of `noises`
//  9. [ ] `console.log` the last element in `noises` again without hard coding the index.
//  10. [ ] `console.log` the whole array.
//  11. [ ] Does it look right?

var noises = [];  //  initializing noises with the value of an empty array
noises[0] = "meow";  // using bracket notation to add meow to the begining of noises array
noises.push("purr"); //  adding "purr" to the end of noises array
noises.unshift("hiss");  //  using unshift array method to add value to the begining of noises array
noises[noises.length] = "yowl"; //  using bracket notation to add value to the end of noises array
console.log(noises.length);  //  printing the length of noises array
console.log(noises.length - 1);  //  printing the last value in noises array
console.log(noises);  //  printing noises

//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
// ## Step 3 - Combining Step 1 and 2
//  1. [ ] Using **bracket syntax**, assign the `noises` property on `animal` to our new `noises` array.
//  2. [ ] Using any syntax add another noise to the `noises` property on `animal`.
//  3. [ ] `console.log` `animal`.
//  4. [ ] Does it look right?

animal.noises = noises; //  using bracket syntax to add values from noises array to noises property in animal object
animal.noises.push("beg");  //  adding a value to noises property
console.log(animal);  //  printing animal


/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////

// ## Step 6 - A Collection of Animals
//  1. [ ] Create a variable named `animals` and assign it to an empty array.
//  2. [ ] `push` our `animal` that we created to `animals`. You should now see your first animal appear on your `index.html` page!
//  3. [ ] `console.log` `animals`. What does it look like?
//  4. [ ] Create a variable called `duck` and assign it to the data:
//   - `{ species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] }`
//  5. [ ] `push` `duck` to `animals`
//  6. [ ] `console.log` `animals`. What does it look like?
//  7. [ ] Create two more animal objects each with a species, a name, and at least two sounds sounds and add each one of them to `animals.
//  8. [ ] `console.log` `animals`, and, `console.log` the length of `animals`. Is everything looking right?

var animals = []  //  initializing animals array
animals.push(animal); //  adding cat to animals array
console.log(animals);  // printing animls
var duck = { species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] };  //  creating duck object
animals.push(duck); //  adding duck object to animals array
console.log(animals); //  printing animals
var dog = { species: 'dog', name: 'Stout', noises: ['bark', 'howl', 'beg', 'whine'] };  //  creating dog object
animals.push(dog);  //  adding dog to animals
var rooster = { species: 'rooster', name: 'Nugget', noises: ['gobble', 'crow', 'bawk'] }; //  creating rooster object
animals.push(rooster);  //adding rooster to animals
console.log(animals); //  printing animals
console.log(animals.length);  //  printing length of animals

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// 1. [ ] Choose a data structure for this **list** of friends.
// 2. [ ] Write a comment in your code that explains why you chose this data structure.
// 3. [ ] Create a variable called `friends` and assign it to the data structure that you chose.
// 4. [ ] Take a look at the documentation for `Math.random` here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// 5. [ ] Write a function called `getRandom` that takes our `animals` array and returns  a random `index` of the input array, using `Math.random`
// 6. [ ] Using a random index from this function that you just created, get a random animal and add its `name` to `friends`.
// 7. [ ] `console.log` `friends`.
// 8. [ ] Using **bracket notation**, add the `friends` list as a **property** also named `friends` on one of the animals in the `animals` array
// 9. [ ] `console.log` your work.

//  choosing an array for the data structure of friends because it is zero indexed
 var friends = []; //  initializing friends array
 function getRandom(array){;  // creating getRandom function that takes an array and returns a random index from input array
            return array[Math.floor(Math.random() * array.length)];
}
friends.push(getRandom(animals).name);  //  using getRandom function to add name of random animal to friends array
console.log(friends); //  printing friends
dog.friends = friends;  //  adding friends property with value of an array to dog object


/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}