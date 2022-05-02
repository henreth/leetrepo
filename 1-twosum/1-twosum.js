/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

 var twoSum = function(nums, target) {
    let indexes = []
    nums.map((num,i)=>{
        nums.slice(i+1,).map((num2)=>{
            if (num+num2==target){
                indexes = [i,nums.indexOf(num2)]
            }
        })
    })
    return indexes
};