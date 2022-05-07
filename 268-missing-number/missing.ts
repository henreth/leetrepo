function missingNumber(nums: number[]): number {
  let sum = nums.length;
  for (let i = 0; i < nums.length; i++) {
    sum += i - nums[i];
  }

  return sum;
}

// function missingNumber(nums: number[]): number {
//     nums.sort((a,b) => a-b);
//     for(let i=0 ; i<nums.length; i++){
//         if(i !== nums[i]) return i;
//     }
//     return nums[nums.length-1]+1
// };