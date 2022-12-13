/**
 *  LOOPS:
 *      Loops are created to repeat work while certain conditions remain true.  The ability to program loops helps*
 *      lessen the amount of code we need to write to perform the same tasks.
 */

//  While Loops //
//  A while statement creates a loop that executes a specified code as long as the test condition is true.  Each iteration*
//  the test condition is evaluated.
let x = 0;

while (x < 5){  //  while keyword followed by the test condition
    console.log("Mississippi");     //  code to be executed in the curly braces
    x++ //  test value changed at each iteration
}                           //  prints => Mississippi
                            //            Mississippi
                            //            Mississippi
                            //            Mississippi
                            //            Mississippi


//  For Loops   //
//  For loops are used to iterate or loop through any zero-indexed value.  A for loop can be created to iterate through an*
//  array and execute a block of code for each iteration.
let arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];
//  Reverse iteration through an Array
let arrReverse = [];
for (var i = arr.length - 1; i >= 0; i--){  //  (starts at last index; iterates to and includes 0; decriments by 1)
    arrReverse.push(arr[i]);
}
console.log(arrReverse);  //  prints => ['i', 'h', 'g','f', 'e', 'd','c', 'b', 'a']
//  Forward iteration through an Array
let arrForward = [];
for (var i = 0; i < arrReverse.length; i++){    //  (starts at 0 index; iterates to and includes last index; increments by 1)
    arrForward.unshift(arrReverse[i]);
}
console.log(arrForward);  //  prints => ['a', 'b', 'c','d', 'e', 'f','g', 'h', 'i']

//  For-in Loops    //
//  Since objects are not zero-indexed, they cannot be iterated through an index value.  Objects must be iterated through *
//  using a for-in loop; where each iteration is called by the object property's keys.
