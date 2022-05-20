function luckyNumbers (matrix: number[][]): number[] {
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