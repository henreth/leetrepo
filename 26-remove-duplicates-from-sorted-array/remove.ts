function removeDuplicates(nums: number[]): number {
  for (let i = 1; i < nums.length; i++) {
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