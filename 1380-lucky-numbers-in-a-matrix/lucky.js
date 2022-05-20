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
            console.log(min)
            if (min === matrix[row][col]){
                minCol = col
            }
        }
            
    console.log(' ')
        if (minCol >= 0){
            let max = matrix[row][minCol]
            for (let row2 = 0; row2 < matrix.length; row2++){
                // console.log(row2,'-',matrix[row2])
                max = Math.max(max,matrix[row2][minCol])
                // console.log(max)
            }
            if (max=== matrix[row][minCol]){
                lucky.push(max)
            }
        }
           
    }

    return lucky
};