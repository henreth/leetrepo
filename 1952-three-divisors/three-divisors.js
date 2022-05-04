/**
 * @param {number} n
 * @return {boolean}
 */
 var isThree = function(n) {
    let count = 0;
    
    for (let i = 1; i <= n; i++) {
        n % i === 0 ? count++: null    
    }
    
    return count === 3;
};
