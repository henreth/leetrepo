/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 const twoSum = function (nums, target) {
   // new Map() creates an object that holds key-value pairs and rembers what order they were inserted in
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
      const diff = target - nums[i];
      if (map.has(diff)) {
        // map.has will tell you if diff is currently in the map
        return [map.get(diff), i];
        // map.get will return the value associated with the key of diff
      }
      map.set(nums[i], i);
      // map.set will create a key in map with the value of i (the index in the array)
    }
  };