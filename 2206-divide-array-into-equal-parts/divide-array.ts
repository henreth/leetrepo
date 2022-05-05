function divideArray(nums: number[]): boolean {
    let sortedNums=nums.sort((num1,num2)=>num1-num2)
    let numArr = []
    for (let i = 0;i < nums.length; i+=2){
        if (sortedNums[i] != sortedNums[i+1]){
            return false
        }
    }
    return true
};