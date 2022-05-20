class Solution:
    def numIdenticalPairs(self, nums: List[int]) -> int:
        pairs = {}
        count = 0
        
        for num in nums:
            if num in pairs:
                count+=pairs[num]
                pairs[num]+=1
            else:
                pairs[num]=1
        
        
        return count