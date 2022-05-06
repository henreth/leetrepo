class Solution:
    def isPowerOfThree(self, n: int) -> bool:
        exp = 0
        newN= n
        while newN >= 3:
            exp+=1
            newN = newN / 3
        return 3 ** exp == n
        