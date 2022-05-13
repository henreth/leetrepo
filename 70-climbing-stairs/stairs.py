class Solution:
    def climbStairs(self, n: int) -> int:
        if n <= 0: return 0
        if n <= 2: return n

        one_step = 2
        two_steps = 1
        count = 0

        for i in range(2,n):
            count = one_step + two_steps
            two_steps = one_step
            one_step = count
        
        return count
    