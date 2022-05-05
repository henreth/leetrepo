function intToRoman(num: number): string {
    let dict = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]
    let nums = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    let result = ""
    for (let i=0; i<nums.length; i++){
        result += dict[i].repeat(Math.floor(num / nums[i]))
        num %= nums[i]}
    return result
};