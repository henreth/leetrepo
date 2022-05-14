function singleNumber(nums: number[]): number{
    const set = new Set(nums);
    const setSum = [...set].reduce((acc, elem) => acc + elem);
    const numsSum = nums.reduce((acc, elem) => acc + elem);
  
    return 2 * setSum - numsSum;
  };
  