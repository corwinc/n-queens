/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

  /*var myBoard = new Board({'n': n});  //create a new board of N size to work with
  var numPlaced = 0;  //keep track of how many rooks have been placed without conflict
  var getRandomIndex = function() {  //make random number generator
    return Math.floor(Math.random() * n);  //get random x and y values
  };

  var placeAnX = function() {
    var checked = {}
    var xCoord = getRandomIndex();
    var yCoord = getRandomIndex();  //need to optimize here --> if the pair has been checked already, generate new pair
    if (myBoard.get(xCoord)[yCoord] === 0) {  //check to see if there is an x there already
      // var curArray = new Array(n);
      // curArray = [0, 0, 0, 0];
      // board.set(xCoord, [arra]
      myBoard.set(xCoord)[yCoord] = 1;  //if not, make it a rook
    }
    if (myBoard.hasAnyRowConflicts() || myBoard.hasAnyColConflicts) {  //if any conflicts, undo rook placement
      myBoard.set(xCoord)[yCoord] = 0;
    } else {  //otherwise, leave the rook, and increment num placed
      numPlaced++;
    }
  };

  while (numPlaced < n) {  //as long as we haven't placed N rooks, keep trying to place an X
    placeAnX();
  }*/


window.findNRooksSolution = function(n) {
  var myBoard = new Board({n: n});  //create a new board of N size to work with
  var numPlaced = 0;  //keep track of how many rooks have been placed without conflict
  var solution = [];
  var getRandomIndex = function() {  //make random number generator
    return Math.floor(Math.random() * n);  //get random x and y values
  };

  var placeAnX = function() {
    debugger;
    var xCoord = getRandomIndex();
    var yCoord = getRandomIndex();  //need to optimize here --> if the pair has been checked already, generate new pair
    if (myBoard.get(xCoord)[yCoord] === 0) {  //check to see if there is an x there already
      var ogRow = myBoard.get(xCoord);
      var newRow = Array.prototype.splice.apply(ogRow);
      newRow[yCoord] = 1;
      myBoard.set(xCoord, newRow);
    }
    if (myBoard.hasAnyRowConflicts() || myBoard.hasAnyColConflicts()) {  //if any conflicts, undo rook placement
      myBoard.set(xCoord, ogRow);
    } else {  //otherwise, leave the rook, and increment num placed
      numPlaced++;
    }
  };

  while (numPlaced < n) {  //as long as we haven't placed N rooks, keep trying to place an X
    placeAnX();
  }

  for (var i = 0; i < test.attributes.n; i++) {
    solution.push(test.attributes[i]);
  }

  //at this point we've place N rooks so we have found a solution
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(myBoard));
  return solution;
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solution = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solution = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
