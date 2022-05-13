function climbStairs(n: number): number {
    if(n <= 0) return 0;
    if(n <= 2) return n;
    
    let one_step = 2;
    let two_steps = 1;
    let count = 0;
    
    for(let i=2; i<n; i++){
    	count = one_step + two_steps;
    	two_steps = one_step;
        one_step = count;
    }
    return count;
};