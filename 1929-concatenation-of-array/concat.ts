function getConcatenation(nums: number[]): number[] {
    let ans = nums
    ans.forEach(i=>ans.push(i))
    return ans
};