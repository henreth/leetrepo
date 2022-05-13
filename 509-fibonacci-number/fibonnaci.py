class Solution:
    def fib(self, n: int) -> int:
        if n < 2: return n

        one = 0
        two = 1
        count = 0

        for i in range(n):
            count = one + two
            two = one
            one = count
        
        return count
    