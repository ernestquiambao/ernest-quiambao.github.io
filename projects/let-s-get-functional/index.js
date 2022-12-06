// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');
const { mapValues } = require('lodash');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./ernest-quiambao.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {  
    //  building array filled with objects who have the property value of male
    let males = _.filter(array, function(customer){     
        return customer.gender === 'male';
        })   
//  returning length of males array
return males.length;    
};

var femaleCount = function(array){
    let females = _.reduce(array, function(accumulator, current){   //  current is customer object
        //  determine if the current item is in the array is female
        if (current.gender === 'female'){//  if true, add 1 to accumulator
            return accumulator + 1;
        }else{
            return accumulator; //  if false, return accumulator
        }
            
    }, 0)  
    return females;

};


var oldestCustomer = function(array){
    let oldest = _.reduce(array, function(accumulator, current){
        if (accumulator.age > current.age){ //  testing if accumulator object age is greater than current object age
            return accumulator; //  returns accumulator object
        } 
        return current; //  returns current object
        })
        
    return oldest.name; //  returns oldest object name
}
var youngestCustomer = function(array){
    let youngest = _.reduce(array, function(accumulator, current){
        if (accumulator.age < current.age){ //  testing if accumulator object age < current object age
            return accumulator; //  return accumulator
        }
        return current; //  return current
    })
return youngest.name;    // return youngest.age
}
var averageBalance = function(array){
    let totalBalance = _.reduce(array, function(accumulator, current){
        accumulator += Number(current.balance.replace(/[$,]/g,"")); //  adding current balance to accumulator
        return accumulator; //  returning accumulator
        }, 0)  
    return totalBalance / array.length; //  returning the totalBalance divided by the number of elements in array
};

var firstLetterCount = function(array, letter){ //  function takes array and single string input
    let first = _.filter(array, function(customer){ //  Build an array with only names of customers with the starting first letter in their name
       return customer.name[0].toLowerCase() === letter.toLowerCase();
      
    })
  return first.length;  //  returning the length value of array first
};


var friendFirstLetterCount = function(array, customer, letter){
    
    for (var i = 0; i < array.length; i++){     //  iterate array
        if (array[i].name === customer){     //  test if array[i] is customer
            let friendFirstLet = _.filter(array[i].friends, function(friend){ // Build an array with only friends' name that start with same letter 
                return friend.name[0].toLowerCase() === letter.toLowerCase();
                })
                    return friendFirstLet.length;   //  return length of friendFirstList
                }
    }               
};

var friendsCount = function(array, name){
    var namesFriends = [];  //  intialize namesFriends array
    for (var i = 0; i < array.length; i++){ //  interate to access array[i] elements
        for (var j = 0; j < array[i].friends.length; j++){  //  iterate to access array[i].friends array elements
            if (array[i].friends[j].name === name){ //  test if array[i].friends[j].name property is name
                namesFriends.push(array[i].name);   //  push array[i].name into namesFriends
            }
        }
    }
    return namesFriends;    //  return namesFriends
    }

var topThreeTags = function(array){
        //  initialize array to fill with sub arrays containing tags
      var allSubs = [];
      var allTags;
        for (var i = 0; i < array.length; i++){ //  iterating through array 
            //  pushing tag property into allSubs array
          allSubs.push(array[i].tags)
        }
      allTags = allSubs.flat();// remove sub array with .flat
      //  initialize count object to store count of each element in allTags\
      var count = {};
      for (var i = 0; i < allTags.length; i++){ //  iterating through allTags array
        if (count.hasOwnProperty(allTags[i])){  //  testing if count object has current element
          count[allTags[i]]++;  //  if true, adding 1 to value
          }else{    //  false
          count[allTags[i]] = 1;    //  adding the property to count and assigning value of 1
          }
        
        }
      var countArr = (Object.entries(count)).sort((a, b) => {   //  initializing countArr with sorted array by value
      return b[1] - a[1];
    });
      console.log(countArr);
      var oneTwoThree = _.first(countArr, 3);   //  initializing oneTwoThree array with the first 3 objects in countArr
      var oneTwoThreeNames = _.map(oneTwoThree, function(array){return array[0]})   //  initializing oneTwoThreeNames with an array of the name properties of oneTwoThree
      return oneTwoThreeNames;  //  returning oneTwoThreeNames array
    };  


var genderCount = function(array){
    var sexes = _.reduce(array, function(accumulator, current){ //  
        if (current.gender === "male"){ //  testing if current element has gender property of male
                accumulator.male += 1;  //  if yes, adding 1 to male property
            }else if (current.gender === "female"){ //  else if, gender is female
                accumulator.female += 1;    //  adding 1 to female property
            }   else {  //  else non-binary
            accumulator["non-binary"] += 1; //  adding 1 to non-binary property
            }
            return accumulator; //  returns accumulator object
    }, {male: 0, female: 0, "non-binary": 0}) //    Initializing seed with an object with gender properties
    return sexes;   //  returns sexes object
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
