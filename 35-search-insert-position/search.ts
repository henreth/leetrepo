function searchInsert(nums: number[], target: number): number {
    if (nums.indexOf(target) != -1) return nums.indexOf(target)
    else {
        nums.push(target)
        return nums.sort((a, b) => a - b).indexOf(target)
    }
};

// alternative solution:
// function searchInsert(nums: number[], target: number): number {
//     let start = 0;
//     let end = nums.length - 1;
//     while (start <= end) { // iterate through the nums index by indexing from the beginning to the end
//         let mid = Math.floor((start + end) / 2); // find mid point
//         if (nums[mid] === target) { // if the mid point is the target, return
//             return mid;
//         } else if (nums[mid] > target) { // if the mid point is greater than the mid point, set the end to the middle to reset the indexing
//             end = mid - 1;
//         } else { // set the start value to the mid point to reset indexing
//             start = mid + 1;
//         }
//     }
//     return start;
// };