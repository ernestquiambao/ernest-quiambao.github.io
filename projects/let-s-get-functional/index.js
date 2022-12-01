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
    let males = _.filter(array, function(customer){
        return customer.gender === 'male';
        })   //
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

var firstLetterCount = function(array, letter){
    let first = _.filter(array, function(customer){ //  
       return customer.name[0].toLowerCase() === letter.toLowerCase();
      
    })
  return first.length;
};
// ### 7: `friendFirstLetterCount`
//  - **Objective**: Find how many friends of a given customer have names that start with a given letter
//  - **Input**: `Array`, `Customer`, `Letter`
//  - **Output**: `Number`
//  - **Constraints**:

var friendFirstLetterCount = function(array, customer, letter){
    
    for (var i = 0; i < array.length; i++){     //  iterate array
        if (array[i].name === customer){     //  test if array[i] is customer
            let friendFirstLet = _.filter(array[i].friends, function(friend){ // 
                return friend.name[0].toLowerCase() === letter.toLowerCase();
                })
                return friendFirstLet.length;
            }
    }        //  filter customer's friends starts with letter
//  return             
};
var friendsCount;

var topThreeTags;

var genderCount;

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
