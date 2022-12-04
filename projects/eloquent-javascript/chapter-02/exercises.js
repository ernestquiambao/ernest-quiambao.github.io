
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// function triangles() {
//     var poundTown = ""; //  initialize
//     for (var i = 1; i < 8; i++){   // loop 
//         poundTown += "#"; //  add and reassign
//         console.log(poundTown);   //  print 
//       }
//     }
function triangles(num) {
  var poundTown = ""; //  initialize
  for (var i = 1; i < num + 1; i++){   // loop 
      poundTown += "#"; //  add and reassign
      console.log(poundTown);   //  print 
    }
  }     
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz() {
  for (var i = 1; i < 16; i++){ //  loop from 1 to 15
    if (i % 3 === 0   &&  i % 5 !== 0){ //  testing if i is divisible by 3 AND it is not divisible by 5
      console.log("fizz");  //  printing fizz
    }else if (i % 3 !== 0  &&  i % 5 === 0){  //  testing if i is divisible by 5 AND it is not divisible by 3
      console.log("buzz");  //  printing buzz
    }else if (i % 3 === 0   &&  i % 5 === 0){ //  testing if i is divisible by 3 AND 5
      console.log("fizzbuzz");  //  printing fizzbuzz
    }else{  //  all other conditions
      console.log(i); //  printing i
    }
  }
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(num){
  var board = "";
  for (var i = 0; i < num; i++){  //  iterates creating number of rows
      for (var j = 0; j < num; j++){  //  iterates creating row characters
      if ((i + j) % 2 == 0){  //  tests if even
        board += " ";   //  creates empty space
      }else { //  else odd
        board += "#"; //  creates # 
      }
  }
  board += "\n";  //  creates new row
  }
console.log(board); //  prints board
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
