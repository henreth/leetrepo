/**
 * @param {number} n
 * @return {boolean}
 */
 var isPowerOfThree = function(n) {
    let exp = 0
    let newN = n
    while (newN >= 3) {
        exp++
        newN = newN / 3
    }
    return 3 ** exp === n
};
