class Solution:
    def sumOfUnique(self, nums: List[int]) -> int:
        result = 0
    
        for i in nums:
            if nums.count(i) == 1:
                result += i
        return result