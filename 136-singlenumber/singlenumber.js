/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
    let obj = {}
    for (let i of nums){
        if (obj[i]){
            obj[i]++
        } else {
            obj[i]=1
        }
    }
    return Object.keys(obj).find(key => obj[key] === 1);

    //alt solution for finding the key
    //  for (number in numberCount) {
    //     if (numberCount[number] === 1) {
    //         return number
    //     }
    // }
};