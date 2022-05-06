function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    let nums = [].concat(nums1,nums2).sort((num1,num2)=>num1-num2)
    let medIdx = Math.round(nums.length/2) - 1 
    if (nums.length %2!=0){
        return nums[medIdx]
    } else {
        let idx = Math.round(nums.length/2)
        return (nums[medIdx] + nums[idx])/2
    }

    }