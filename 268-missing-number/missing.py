class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        for num in range(len(nums)+1):
            if num not in nums:
                return num  

        # return sum(range(len(nums)+1)) - sum(nums)

        # n = len(l)
        # return ((n * (n+1)) // 2) - sum(l) 