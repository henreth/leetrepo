function majorityElement(nums: number[]): number {
    if (nums.length === 0) return 0;
  
    let majority: number;
    let count = 1;
    nums.forEach((num) => {
      if (!majority) {
        majority = num;
        return;
      }
      if (!count) {
        count += 1;
        majority = num;
      } else if (majority === num) {
        count += 1;
      } else {
        count -= 1;
      }
    });
    return majority!;
  };