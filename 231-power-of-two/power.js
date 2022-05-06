/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
    let exp = 0
    let newN = n
    while (newN >= 2) {
        exp++
        newN = newN / 2
    }
    return 2 ** exp === n
};
