/* Helper Functions */
var zeroMatrix = function(matrix) {
  // loop over array of arrays until you find a zero, then traverse up down left right converting all to zeros
  // do it recursively

  for (let i=0; i<matrix.length;i ++) {
    for (let j=0; j<matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        return setZero(matrix, i, j)
      }
    }
  }
}

var setZero = function(matrix, row, col) {
  
  let upRow = row
  let downRow = row
  while (true) {
    matrix[upRow][col] = 0
    upRow--
    if (upRow < 0) break
  }

  while (downRow !== matrix.length) {
    matrix[downRow][col] = 0
    downRow++
  }

  let upCol = col
  let downCol = col

  while (true) {
    matrix[row][upCol] = 0
    upCol--
    if (upCol < 0) break
  }

  while (downCol !== matrix[row].length) {
    matrix[row][downCol] = 0 
    downCol++
  }

  return matrix

}

// Testing
var testMatrix = [
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 0, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1]
];

function printMatrix(mtx) {
  for (let el of mtx) {
    console.log(el)
  }
}

console.log('before');
printMatrix(testMatrix);

zeroMatrix(testMatrix);

console.log('after');
printMatrix(testMatrix);

// function should mutate the matrix to the following:
// [
//   [1, 0, 1, 1],
//   [1, 0, 1, 1],
//   [0, 0, 0, 0],
//   [1, 0, 1, 1],
//   [1, 0, 1, 1],
//   [1, 0, 1, 1]
// ]
