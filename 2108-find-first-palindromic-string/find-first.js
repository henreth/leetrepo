/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function (words) {
    let pal = ''
    for (let s of words) {
        let input = s.replace(/[^0-9a-z]/gi, '').toLowerCase()
        let reverse = ''
        input.split('').map(i => reverse = i + reverse)
        input === reverse ? (pal === '' ? pal = s : null) : null
    }

    return pal

};