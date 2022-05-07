function missingNumber(nums: number[]): number {
  let sum = nums.length;
  for (let i = 0; i < nums.length; i++) {
    sum += i - nums[i];
  }

  return sum;
}