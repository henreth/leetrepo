/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    nums.splice(0, nums.length, ...(new Set(nums)));
    // third and on parameters are added to the array beginning from the start value in splices
    // ...(new Set(nums)) -> copies in only the unique values of nums
    // set objects are collections of vlaues that stores unique values of any type
    // all values have to be distinct 
};