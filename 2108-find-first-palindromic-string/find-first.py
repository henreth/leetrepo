class Solution:
    def firstPalindrome(self, words: List[str]) -> str:
        for word in words:
            reverse = word[::-1]
            if word==reverse:
                return word
            
        return ""
        