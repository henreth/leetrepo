/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let input = s.replace(/[^0-9a-z]/gi, '').toLowerCase()
    let reverse =''
    input.split('').map(i=>reverse=i+reverse)
    return input===reverse
};

