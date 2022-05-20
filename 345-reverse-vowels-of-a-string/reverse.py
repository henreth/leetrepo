class Solution:
        def reverseVowels(self, s):
            s = list(s)
            vowels = set('aeiouAEIOU')
            left, right = 0, len(s) - 1
            while left <= right:
                while left <= right and s[left] not in vowels: left += 1
                while left <= right and s[right] not in vowels: right -= 1
                if left > right: break
                s[left], s[right] = s[right], s[left]
                left, right = left + 1, right - 1
            return ''.join(s)



    # alternative solution:

    # def reverseVowels(self, s: str) -> str:
    #     left = 0
    #     right = len(s) - 1
    #     s = list(s)
    #     vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
    #     while left < right:
    #         if s[left] not in vowels:
    #             left += 1
    #         else:
    #             if s[right] not in vowels:
    #                 right -= 1
    #             else:
    #                 s[left], s[right] = s[right], s[left]
    #                 left += 1
    #                 right -= 1

    #     return ''.join(s)


    # another alternative
    # def reverseVowels(self, s):
    # # vowels = re.findall('(?i)[aeiou]', s)
    # # return re.sub('(?i)[aeiou]', lambda m: vowels.pop(), s)