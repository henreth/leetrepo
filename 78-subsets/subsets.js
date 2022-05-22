/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsets = function(nums) {
    let subs = [[]], arr= []

for(let num of nums){
    arr = []
    for(let entry of subs){
        arr.push([...entry, num])
    }
    
    subs.push(...arr)
}

return subs
};