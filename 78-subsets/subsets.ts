function subsets(nums: number[]): number[][] {
    let res = [[]], appendarr= []
    
    for(let num of nums){
        appendarr = []
        for(let entry of res){
            appendarr.push([...entry, num])
        }
        
        res.push(...appendarr)
    }
    
    return res
    
};
