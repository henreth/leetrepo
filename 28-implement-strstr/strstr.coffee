 strStr = (self, haystack: str, needle: str) ->
        if needle == '' or needle == haystack:
            return 0
        if len(needle) > len(haystack):
            return -1
        
        for i in range(len(haystack)-len(needle)+1):
            if haystack[i] == needle[0]:
                for j in range(len(needle)):
                    if needle[j]!= haystack[i+j]:
                        break
                    elif j == len(needle) -1:
                        return i
        
        return -1