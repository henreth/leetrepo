class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        for i in range(1,len(nums)): # starts at the second index so we can take the value of the previous index for all 
            nums[i] = max(nums[i], nums[i-1] + nums[i]) # compares the value of the current index to the value of the current index plus the value of the previous index 
                # then sets the larger value to the current index 
        return max(nums)