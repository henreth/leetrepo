function selfDividingNumbers(left: number, right: number): number[] {
  let nums = [];
  
  while (left <= right) {
    if (left % 10 !== 0) {
      if (left.toString().split('').every(num => (left % Number(num)) === 0)) {
        nums.push(left);
      }
    }
    left += 1;
  }
  
  return nums;
};