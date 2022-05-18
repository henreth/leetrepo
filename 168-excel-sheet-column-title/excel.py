class Solution:
    def convertToTitle(self, n: int) -> str:
        res = ""
        while n:
            res = chr(ord("A") + (n - 1) % 26) + res
            n = (n - 1) // 26
        
        return res