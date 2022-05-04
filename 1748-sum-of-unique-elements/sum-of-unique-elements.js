/**
 * @param {number[]} nums
 * @return {number}
 */
 var sumOfUnique = function(nums) {
    let obj = {}

    for (let i of nums){
        obj[i] ? obj[i]++ : obj[i]=1
    }
    
     let uniqueNums = Object.keys(obj).filter(key => obj[key] ===1)
     return uniqueNums.length>0?uniqueNums.reduce((key,tot)=>parseInt(tot)+parseInt(key)): 0
};