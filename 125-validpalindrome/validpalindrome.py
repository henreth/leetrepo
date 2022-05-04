class Solution:
def isPalindrome(self, s: str) -> bool:
left, right = 0, len(s) - 1
while left < right:
if not s[left]. isalnum():
left += 1
continue
if not s[right]. isalnum():
right -= 1
continue
if s[left]. lower() == s[right]. lower():
left += 1
right -= 1
else:
break
return right <= left

def isPalindrome2(self, s: str) -> bool:
"""
Use language features to solve
"""
s = ''. join(i for i in s if i. isalnum()). lower()
return s == s[::-1]