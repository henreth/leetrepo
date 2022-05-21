/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
 var selfDividingNumbers = function(left, right) {
    let nums = []
    for (let i = left; i <= right; i++){
        if (i < 10 ) nums.push(i)
        else if(i.toString().split('').every( num=> i % parseInt(num) === 0 )) nums.push(i)
    }
    return nums
};