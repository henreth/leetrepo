class Solution:
    def maximumWealth(self, accounts: List[List[int]]) -> int:
        maxWealth = 0;
        for customer in accounts: 
            maxWealth = max(maxWealth,sum(customer))
        return maxWealth