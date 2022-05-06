class Solution:
    def isPowerOfTwo(self, n: int) -> bool:
        exp = 0
        newN= n
        while newN >= 2:
            exp+=1
            newN = newN / 2
        return 2 ** exp == n
        