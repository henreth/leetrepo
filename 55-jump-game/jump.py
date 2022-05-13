class Solution:
    def canJump(self, nums: List[int]) -> bool:
        idx = 0
        maxJump = 0
        target = len(nums) - 1
        
        while idx < len(nums):
            maxJump = max(maxJump, idx + nums[idx])
            if maxJump >= target:
                return True
            if (maxJump <= idx) & (nums[idx] == 0):
                return False
            
            idx+=1
        
        return False
            
        