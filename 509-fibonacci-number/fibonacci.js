/**
 * @param {number} n
 * @return {number}
 */
 var fib = function(n) {
    if(n < 2) return n;
    
    let one = 0;
    let two = 1;
    let count = 0;
    
    for(let i=0; i<n; i++){
    	count = one + two;
    	two = one;
        one = count;
    }
    return count;
};