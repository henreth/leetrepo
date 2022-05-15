class Solution:
    def letterCombinations(self, digits: str) -> List[str]:
        if digits == '':
            return []
            
        digitsMap = ['', '', ['a','b','c'], ['d','e','f'], ['g','h','i'], ['j','k','l'], ['m','n','o'],['p','q','r','s'],['t','u','v'],['w','x','y','z']]
        combos = []

        def recurse(combination, nextDigits):
            if len(combination) == len(digits):
                combos.append(combination)
                return
        
            digit = int(nextDigits[0]) 
            letters = digitsMap[digit] or ''
            for i in range(len(letters)):
                recurse(combination + letters[i], nextDigits[1:])
        
        

        recurse('',digits)
        return combos