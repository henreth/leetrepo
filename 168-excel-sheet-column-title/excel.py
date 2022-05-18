class Solution:
    def convertToTitle(self, n: int) -> str:
        res = ""
        while n:
            res = chr(ord("A") + (n - 1) % 26) + res 
            # chr(int) finds the unicode character at the specified index
            # ord(char) finds the unicode location of the specified character
            # we add ord("A") to start at the alphabet
            # we subtract n - 1 because the index starts at 0 so the alphabet is actually 0-25
            # (n-1) % 26 will find how many indexes after A the intended character will be
            n = (n - 1) // 26  # // divides by 26 and then rounds down the remainder
            # alter n to find the potential next character
        
        return res