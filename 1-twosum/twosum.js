/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    let targetMinusNum = {}
     for (let num of nums) {
         if (target - num in targetMinusNum) { // if target - num is in the obj, that means there is an element in nums that adds with the current num to our target
             if (nums.indexOf(target - num) === nums.indexOf(num)) { // account for if the value of the two elements are the same
                 return [nums.indexOf(target - num), nums.indexOf(num, nums.indexOf(num) + 1)]
                  // nums.indexOf(num,nums.indexOf(num) + 1 ) -> will find the index of the value (num) after the position of nums.indexOf(num) + 1
                 // if target-num === num; nums.indexOf(target - num) === nums.indexOf(num) 
             } else {
                 return [nums.indexOf(target - num), nums.indexOf(num)]
             }
             // write the above if else statement as a one line ternary
            //  return nums.indexOf(target - num) === nums.indexOf(num) ? [nums.indexOf(target - num), nums.indexOf(num, nums.indexOf(num) + 1)] : [nums.indexOf(target - num), nums.indexOf(num)]
         } else {
             targetMinusNum[num] = true
         }
     }
     return []
 };

//   const twoSum = function (nums, target) {
//     // new Map() creates an object that holds key-value pairs and remembers what order they were inserted in
//      const map = new Map();
//      for (let i = 0; i < nums.length; i++) {
//        const diff = target - nums[i];
//        if (map.has(diff)) {
//          // map.has will tell you if diff is currently in the map
//          return [map.get(diff), i];
//          // map.get will return the value associated with the key of diff
//        }
//        map.set(nums[i], i);
//        // map.set will create a key in map with the value of i (the index in the array)
//      }
//    };