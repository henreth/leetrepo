function subsets(nums: number[]): number[][] {
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
