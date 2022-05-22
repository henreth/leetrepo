function subsets(nums: number[]): number[][] {
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
