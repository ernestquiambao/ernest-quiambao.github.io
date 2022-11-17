// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/

/*
I: None
O: logs numbers 1-100, logs "Fizz" for multiples of 3, logs "Buzz" for multiples of 5, logs "FizzBuzz" for numbers which are multiples of both 3 and 5
C: N/A
E: N/A
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
    for (var i = 1; i < 101; i++){// loops from 1-100
        if (i % 3 === 0 && i % 5 === 0){//  checks if iteration number is a multiple of 3 and 5
            console.log("FizzBuzz");//  logs "FizzBuzz"
        }   else if (i % 3 === 0){//  checks if iteration number is a multiple of 3
            console.log("Fizz");//  logs "Fizz"
        }   else if (i % 5 === 0){//  checks if iteration number is a multiple of 5
            console.log("Buzz");//  logs "Buzz"
        }   else{//  any other condition
            console.log(i);//  logs iteration number
        }
    }

    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}