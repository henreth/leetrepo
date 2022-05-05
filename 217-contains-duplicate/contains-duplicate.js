/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
    let numCount = {}
    for (let num of nums){
        numCount[num]?numCount[num]++:numCount[num]=1
    }
    
      return Object.keys(numCount).find(key => numCount[key] > 1 ) 
};