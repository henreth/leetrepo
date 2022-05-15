/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
        if (!digits) {
        return []
    }
    const digitsMap = [null, null, ['a','b','c'], ['d','e','f'], ['g','h','i'], ['j','k','l'], ['m','n','o'],['p','q','r','s'],['t','u','v'],['w','x','y','z']]
    const combos= []

    function recurse(combination, nextDigits) {
        if (combination.length === digits.length) {
            combos.push(combination)
            return
        }
        const digit = parseInt(nextDigits[0]) 
        const letters = digitsMap[digit] || ''
        for (let i = 0; i < letters.length; i++) {
            recurse(combination + letters[i], nextDigits.slice(1))
        }
    }

    recurse('',digits)
    return combos
};