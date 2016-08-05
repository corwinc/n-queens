window.findNRooksSolution = function(n) {
  var myBoard = new Board({n: n});  //create a new board of N size to work with
  var numPlaced = 0;  //keep track of how many rooks have been placed without conflict
  var solution = [];
  var squaresChecked = {};
  var getRandomIndex = function() {  //make random number generator
    return Math.floor(Math.random() * n);  //get random x and y values
  };

  var placeAnX = function() {
    // debugger;
    var xCoord = getRandomIndex();
    var yCoord = getRandomIndex();  //need to optimize here --> if the pair has been checked already, generate new pair
    var pair = JSON.stringify([xCoord, yCoord]);
    if (squaresChecked.hasOwnProperty(pair)) {
      placeAnX();
    } else {
      squaresChecked[pair] = true;
    }
    var ogRow = myBoard.get(xCoord);
    var newRow = ogRow.slice();
    if (myBoard.get(xCoord)[yCoord] === 0) {  //check to see if there is an x there already
      newRow[yCoord] = 1;
      myBoard.set(xCoord, newRow);
    }
    if (ogRow[yCoord] === 1 || myBoard.hasAnyRowConflicts() || myBoard.hasAnyColConflicts()) {  //if any conflicts, undo rook placement
      myBoard.set(xCoord, ogRow);
    } else {  //otherwise, leave the rook, and increment num placed
      numPlaced++;
    }
  };

  while (numPlaced < n) {  //as long as we haven't placed N rooks, keep trying to place an X
    placeAnX();
  }

  //at this point we've place N rooks so we have found a solution
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(myBoard));
  return myBoard.rows();
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0;
  var uniqueSolutions = {};
  var badAttempts = 0;

  // while badAttempts < 2000;
  while (badAttempts < 15000) {
    // var currentSolution =  findNRooksSolution() & each time save result
    var currentSolution = JSON.stringify(findNRooksSolution(n));
    // run check to see if currentSolution is in uniqueSolutions
    if (uniqueSolutions[currentSolution]) {
      badAttempts++;
    } else {
      uniqueSolutions[currentSolution] = true;
      badAttempts = 0;
    }
  }

  solutionCount = Object.keys(uniqueSolutions).length;
    
      // if solution already exists: run again, and increment baddAttempts += 1  
      // if not: add solution to uniqueSolutions and badAttempts = 0;


  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};