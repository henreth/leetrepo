function searchInsert(nums: number[], target: number): number {
    if (nums.indexOf(target)!=-1)return nums.indexOf(target)
else { 
        nums.push(target)
        return nums.sort((a,b)=>a-b).indexOf(target)}
};