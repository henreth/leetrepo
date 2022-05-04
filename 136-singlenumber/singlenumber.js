/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
    let obj = {}
    for (let i of nums){
        if (obj[i]===undefined){
            obj[i]= 1
        } else {
            obj[i]++
        }
    }
    return Object.keys(obj).find(key => obj[key] === 1);
    
};