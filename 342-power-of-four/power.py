class Solution:
    def isPowerOfFour(self, n: int) -> bool:
        exp = 0
        newN= n
        while newN >= 4:
            exp+=1
            newN = newN / 4
        return 4 ** exp == n
        
        