function findClosestNumber(nums: number[]): number {
    // start with num higher than anything
    let closest = Infinity;
  
    for (let num of nums) {
        // if num is lower than closest, update closest to that num, then move on 
      if (Math.abs(num) < Math.abs(closest)) {
        closest = num
      } else if (Math.abs(num) === Math.abs(closest)) {
          // if num is closest, return
        return Math.abs(closest)
      }
    }
  
    return closest;
  };