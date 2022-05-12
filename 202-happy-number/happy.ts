function isHappy(n: number, dict: {} = {}): boolean {
    let nums = n.toString().split('').map((x) => parseInt(x));
    let sum = sumOfSquares(nums)
    
    if (dict[sum]) return false; // if the sum of the square of the digits is already in the dictionary, the num returns an infinite loop not including 1, therefore, its false
    if (sum === 1) return true;
    
    dict[sum] = true;
    
    return isHappy(sum, dict);
};

function sumOfSquares(nums: number[]): number{
    let sum = 0;
    nums.forEach((x) => sum += x * x);
    return sum
}