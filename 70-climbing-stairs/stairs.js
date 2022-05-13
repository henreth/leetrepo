/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
     //initial attempt
     // works but takes too long
    // if (n<=0) return 0
    // if (n<=2) return n
    // return climbStairs(n-1) + climbStairs(n-2)
        // base cases
    if(n <= 0) return 0;
    if(n <= 2) return n;
    
    let one_step_before = 2;
    let two_steps_before = 1;
    let all_ways = 0;
    
    for(let i=2; i<n; i++){
    	all_ways = one_step_before + two_steps_before;
    	two_steps_before = one_step_before;
        one_step_before = all_ways;
    }
    return all_ways;
};
