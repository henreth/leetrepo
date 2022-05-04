function firstPalindrome(words: string[]): string {
    for (let s of words) {
        let input = s.replace(/[^0-9a-z]/gi, '').toLowerCase()
        let reverse = input.split('').reverse().join('')
        if (input === reverse ){
            return s
        }
    }

    return ''
};