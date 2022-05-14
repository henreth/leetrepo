function sumOfUnique(nums: number[]): number {
    const duplicateNums = nums.filter((v, i, a) => a.indexOf(v) !== i);
    return nums.filter(n => !duplicateNums.includes(n)).reduce((a, b) => a + b, 0);
};