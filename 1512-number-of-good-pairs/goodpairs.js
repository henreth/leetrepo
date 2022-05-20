/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
        let numbers = {}
        let count = 0
        
        for (let num of nums){
            if(numbers[num]) {
                count += numbers[num]
                numbers[num]++
            } else {
                numbers[num] = 1 }
        }
    
        return count
};