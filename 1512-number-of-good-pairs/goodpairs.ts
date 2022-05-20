function numIdenticalPairs(nums: number[]): number {
    let numbers = {}
    let count = 0
    
    for (let num of nums){
        if(numbers[num]) {
            count += numbers[num]
            numbers[num]++
        } else {
            numbers[num] = 1 }
    }
    
    return count
};