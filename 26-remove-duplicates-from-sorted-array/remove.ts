function removeDuplicates(nums: number[]): number {
  for (let i = 1; i < nums.length; i++) {
      // for sorted arrays only:
    // if (nums[i] === nums[i - 1]) {
        // for sorted and non-sorted arrays
    if (nums.indexOf(nums[i]) != i) {
        // if value at i is in the sorted array
        // remove the value at the current index
      nums.splice(i, 1);
      //decrease the counter to account the change in the array's size
      i--;
    }
  }

  return nums.length;
};