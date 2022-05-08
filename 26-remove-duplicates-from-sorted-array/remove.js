/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    nums.splice(0, nums.length, ...(new Set(nums)));
    // ...(new Set(nums)) -> copies in only the unique values of nums
};