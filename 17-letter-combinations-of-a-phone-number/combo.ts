function letterCombinations(digits: string): string[] {
    if (!digits) {
        return []
    }
    const digitsMap = [null, null, ['a','b','c'], ['d','e','f'], ['g','h','i'], ['j','k','l'], ['m','n','o'],['p','q','r','s'],['t','u','v'],['w','x','y','z']]
    const combos: string[] = []

    function recurse(combination: string, nextDigits: string) { // helper function to handle logic 
        if (combination.length === digits.length) { // if the current combination is the length of original digits 
            combos.push(combination) // add to the answer array
            return //returning here will end this round of iteration and move on to the next set of letters 
        }
        // begin iteration 
        const digit = parseInt(nextDigits[0]) // current digit is the first in the slice 
        const letters = digitsMap[digit] || '' // find the letters that correspond to the digit 
        for (let i = 0; i < letters.length; i++) { // iterate through the letters 
            recurse(combination + letters[i], nextDigits.slice(1)) // add the current letter to the combination, remove the first digit from the digits and start the process over 
        }
    }

    recurse('',digits)
    return combos
};

