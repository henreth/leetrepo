/**
 * @param {number} n
 * @return {boolean}
 */
 var isPowerOfThree = function(n) {
    return (Math.log10(n) / Math.log10(3)) % 1 == 0;
}

// ! Old solution: 
// /**
//  * @param {number} n
//  * @return {boolean}
//  */
//  var isPowerOfThree = function(n) {
//     let exp = 0
//     let newN = n
//     while (newN >= 3) {
//         exp++
//         newN = newN / 3
//     }
//     return 3 ** exp === n
// };
