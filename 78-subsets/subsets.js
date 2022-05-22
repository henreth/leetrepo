/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsets = function(nums) {
    let subsets = [[]], arr= []

for(let num of nums){
    arr = []
    for(let entry of subsets){
        arr.push([...entry, num])
    }
    
    subsets.push(...arr)
}

return subsets
};