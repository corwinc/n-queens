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


window.findNRooksSolution = function(n) {
  var findNextEmptyRow = function(board) {
    for (var i = 0; i < n; i++) {
      for (var j = 0; j < n; j++) {
        if (board.rows()[i][j] === 1) {
          break; 
        } else if (j === n - 1 && board.rows()[i][j] === 0) {
          return i;
        }
      } 
    }

    return undefined;
  };

  var findSolution = function (board, placedCount) {
    debugger;
    if (board.hasAnyRowConflicts() || board.hasAnyColConflicts()) {
      // do nothing
    } else {
      if (placedCount === n) {
        return board.rows();
      } else {
        var nextRowIndex = findNextEmptyRow(board);
        if (nextRowIndex !== undefined) {
          var nextRow = board.get(nextRowIndex);
          for (var i = 0; i < n; i++) {
            board.togglePiece(nextRow, i);
            placedCount++;
            findSolution(board, placedCount);
          }
        }
      }
    }

  };

  var board = new Board({n: n});
  var solution = findSolution(board, 0);

  return solution;
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var finalCount = 0;

  var findNextEmptyRow = function(board) {
    for (var i = 0; i < n; i++) {
      for (var j = 0; j < n; j++) {
        if (board.rows()[i][j] === 1) {
          break; 
        } else if (j === n - 1 && board.rows()[i][j] === 0) {
          return i;
        }
      } 
    }

    return undefined;
  };

  var findSolutions = function (board, placedCount) {
    var placedCount = 0;

    if (board.hasAnyRowConflicts() || board.hasAnyColConflicts()) {
      // do nothing
    } else {
      if (placedCount === n) {
        finalCount++;
      } else {
        var nextRowIndex = findNextEmptyRow();
        if (nextRowIndex !== undefined) {
          var nextRow = board.get(nextRowIndex);
          for (var i = 0; i < n; i++) {
            board.togglePiece(nextRow, i);
            placedCount++;
            findSolutions(board, placedCount);
          }
        }
      }
    }

  };

  var board = newBoard({n: n});
  findSolutions(board, placedCount);


  return finalCount;
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
