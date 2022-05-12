/**
 * @param {number} n
 * @return {boolean}
 */
 var isHappy = function(n) {
    var seen = {}; // object to store all possible values of the sumb of the squares of n's digits
    while (n !== 1 && !seen[n]) { // if n!==1 and n is not in seen, move on 
        seen[n] = true; // add n to seen 
        n = sumOfSquares(n); //and update n to the sum of the squares of n's digits
    }
    return n === 1 
};

function sumOfSquares(numString) { //helper function to simplify above logic
    return numString.toString().split('').reduce(function(sum, num) { // turn n into a string and split it to get its digits
        return sum + Math.pow(num, 2);
    }, 0);
}