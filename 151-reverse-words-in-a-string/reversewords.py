class Solution:
    def reverseWords(self, s: str) -> str:
        s=s.split()  #split at spaces and convert to list
        s=s[::-1]  #reverse the list
        return (" ".join(s))  #join the list with spaces