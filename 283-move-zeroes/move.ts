/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    let nonZeroes = 0 
    for (let i = 0; i < nums.length; i++){
        let val = nums[i]
        nums[i] = 0 
        if (val!=0){
            nums[nonZeroes] = val
            nonZeroes++
        }
    }
};

// original solution: 
// function moveZeroes(nums: number[]): void {
//     let nonZeroes = 0 
//     for (let i = 0; i < nums.length; i++){
//         if (nums[i]!=0){
//             nums[nonZeroes] = nums[i]
//             nonZeroes++
//         }
//     }
    
//     for (let i =nonZeroes;i < nums.length;i++ ){
//         nums[i] = 0
//     }
// };