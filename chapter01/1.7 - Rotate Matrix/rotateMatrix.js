var rotateMatrix = function(matrix) {
    // rotate in place means we have to keep track of first item
    // 00 -> 0n -> nn -> n0
    // 1,1 -> 1,n-1 -> n-1,n-1 -> n-1,1
    let diagMax = Math.ceil(matrix.length/2)
    let max = matrix.length-1
    for (let i=0; i<diagMax; i++) {
        let jMax = max-i
        for (let j=i; j< jMax; j++ ) {
            let temp = matrix[i][j]
            matrix[i][j] = matrix[max-j][i]
            matrix[max-j][i] = matrix[max-i][max-j]
            matrix[max-i][max-j] = matrix[j][max-i]
            matrix[j][max-i] = temp
        }
    }
    return matrix
    
};


/* TEST */
var testMatrix = [
[1, 2, 3, 4],
[0, 1, 2, 3],
[0, 0, 1, 2],
[1, 0, 0, 1]
];

console.log('before:');
console.log(testMatrix[0]);
console.log(testMatrix[1]);
console.log(testMatrix[2]);
console.log(testMatrix[3]);

rotateMatrix(testMatrix);

console.log('after:');
console.log(testMatrix[0]);
console.log(testMatrix[1]);
console.log(testMatrix[2]);
console.log(testMatrix[3]);

var testMatrix2 = [
    [1, 2, 3, 4, 5],
    [0, 1, 2, 3, 8],
    [0, 0, 1, 2, 9],
    [1, 0, 0, 1, 7],
    [3, 3, 3, 3, 3]
];

console.log('before:');
console.log(testMatrix2[0]);
console.log(testMatrix2[1]);
console.log(testMatrix2[2]);
console.log(testMatrix2[3]);
console.log(testMatrix2[4]);

rotateMatrix(testMatrix2);

console.log('after:');
console.log(testMatrix2[0]);
console.log(testMatrix2[1]);
console.log(testMatrix2[2]);
console.log(testMatrix2[3]);
console.log(testMatrix2[4]);

/*
var edge = n - 1;

pattern observed:
i) col value becomes row value
ii) row value is subtracted off edge and becomes col value

0100
0000
0000
0000

position of 1 -> m[0][1]

0000
0001
0000
0000

position of 1 -> m[1][edge]

0000
0000
0000
0010

position of 1 -> m[edge][edge - 1]

0000
0000
1000
0000

position of 1 -> m[edge-1][0]

0100
0000
0000
0000

position of 1 -> m[0][1]

flow of iteration:
i) start from top left corner and move diagonally down
ii) for each row, iterate pixels until edge - 1
(pixel at edge would have been transformed by the first pixel)
iii) at each pixel iteration, iterate through 4 sides
iv) do iteration in place, i.e. store a temp pixel for moving things around
*/
