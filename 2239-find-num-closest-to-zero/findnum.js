/**
 * @param {number[]} nums
 * @return {number}
 */
 var findClosestNumber = function(nums) {
    let obj = {}
    nums.forEach(num=>(
        obj[num]=Math.abs(0-num)    
    ))
    
    let min = Math.min(...Object.values(obj))
    
    return Object.keys(obj).find(key => obj[key] === min );


};