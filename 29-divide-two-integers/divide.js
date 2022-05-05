/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
 var divide = function (dividend, divisor) {
    if (divisor === 1) return dividend;
  
    const isNegative = dividend > 0 !== divisor > 0;
  
    const MAX_INTERGER = Math.pow(2, 31);
  
    const res = helper(Math.abs(dividend), Math.abs(divisor));
  
    // overflow
    if (res > MAX_INTERGER - 1 || res < -1 * MAX_INTERGER) {
      return MAX_INTERGER - 1;
    }
  
    return isNegative ? -1 * res : res;
  };
  
  function helper(dividend, divisor) {
    if (dividend <= 0) return 0;
    if (dividend < divisor) return 0;
    if (divisor === 1) return dividend;
  
    let acc = 2 * divisor;
    let count = 1;
  
    while (dividend - acc > 0) {
      acc += acc;
      count += count;
    }

    const last = dividend - Math.floor(acc / 2);
  
    return count + helper(last, divisor);
  }


// My solution: fails on overflow
//  var divide = function(dividend, divisor) {
//     var MAX_NEG = -2147483648;
//     var MAX_POS = 2147483647;
//     if (dividend === MAX_NEG && divisor === -1) {return MAX_POS}
//     if (dividend === MAX_POS && divisor === -1) {return MAX_NEG}
//     if (Math.abs(divisor) === 1){return Math.sign(divisor) * dividend}
//     if (dividend === divisor){return 1}
//     let count = 0

//     while (Math.abs(dividend)-Math.abs(divisor) >= 0){
//         dividend= Math.abs(dividend) - Math.abs(divisor)
//         count++
//     }
//     return count * Math.sign(divisor) * Math.sign(dividend)
// };