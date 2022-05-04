/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
    let obj = {}
    for (let i of nums){
        if (obj[i]){
            obj[i]++
        } else {
            obj[i]=1
        }
    }
    return Object.keys(obj).find(key => obj[key] >= nums.length/2 );
};