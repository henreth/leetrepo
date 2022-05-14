class Solution:
    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
        nums = nums1 + nums2 # add nums together to get single array
        nums.sort() # sort 
        length = len(nums) # get length 
        
        if length % 2 == 0:
            idx = round(length / 2) # if the length is even, take the average of the middle two values 
            return (nums[idx - 1] + nums[idx]) / 2
        else:
            idx = round((length / 2) - 0.5) # if the length is odd, find the middle index 
            return nums[idx]
        
        