/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
 var luckyNumbers  = function(matrix) {
    // [3,7,8]
    // [9,11,13]
    // [15,16,17]
    let lucky = []
    for (let row = 0 ; row < matrix.length; row++){
        let min = 2 **32
        let minCol = -1;
        for (let col = 0; col < matrix[row].length; col++){
            min = Math.min(min,matrix[row][col])
            if (min === matrix[row][col]){
                minCol = col
            }
        }
            
        if (minCol >= 0){
            let max = matrix[row][minCol]
            for (let row2 = 0; row2 < matrix.length; row2++){
                max = Math.max(max,matrix[row2][minCol])
            }
            if (max=== matrix[row][minCol]){
                lucky.push(max)
            }
        }
           
    }

    return lucky
};


// alternative solution:
// const luckyNumbers  = matrix => {
//     let minSet = new Set();
//     let maxSet = new Set();
    
//     for (let i = 0; i < matrix.length; i++) {
//         let min = matrix[i][0];
//         for (let j = 0; j < matrix[0].length; j++)
//             min = Math.min(min, matrix[i][j]);
//         minSet.add(min);
//     }
//     for (let j = 0; j < matrix[0].length; ++j) {
//         let max = matrix[0][j];
//         for (let i = 0; i < matrix.length; ++i)
//             max = Math.max(matrix[i][j], max);
        
//         if (minSet.has(max))
//             maxSet.add(max);
//     }
//     return Array.from(maxSet);       
// };