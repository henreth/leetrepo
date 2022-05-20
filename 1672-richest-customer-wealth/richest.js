/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
        let max = 0;
    for (let customer of accounts){
        let sum = 0
        for (let account of customer){
            sum += account        
        }
        max = Math.max(max,sum)
    }
    
    return max
};