/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var getConcatenation = function(nums) {
    let ans = nums
    ans.forEach(i=>ans.push(i))
    return ans
};