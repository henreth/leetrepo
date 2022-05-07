class Solution:
    def removeDuplicates(self, s: str, k: int) -> str:
        # make an array to store a cache of characters and values 
        # the value will denominate how many times that character appears in a row
        stack = []
        # res will be used to create the resulting string
        res = ''
        for i in s:
            if not stack:
                # if i not in stack, add to stack with value of 1 (for the number of i chars in a row)
                stack.append([i,1])
                continue
            if stack[-1][0] == i:
                # if the last item in stack is the same character as i, increase the value of the last item in the stack by 1
                stack[-1][1] += 1
            else:
                # if the last item in stack is not the same character as i, add another item to stack with i and the value of 1
                stack.append([i,1])
            if stack[-1][1] == k:
                # if the last item in the stack has a value of k, that means the character of i has repeated k times
                # so we remove the last item in the stack entirely 
                stack.pop()
        for i in stack:
            # iterate through the array and multiply the resulting combination of items by their values 
            # ie: [t,3] => ttt
            res += i[0] * i[1]
        return res