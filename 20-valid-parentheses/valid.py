class Solution(object):
    def isValid(self, s):
        """
        :type s: str
        :rtype: bool
        """
        stack = ['0']
        m = {')':'(',']':'[','}':'{'}
        for i in s:
            if i in m:
                if stack.pop() != m[i]:
                    return False
            else:
                stack.append(i)
                
        return len(stack) == 1