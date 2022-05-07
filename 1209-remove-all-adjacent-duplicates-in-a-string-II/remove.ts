type StackVal = {
    char: string;
    count: number;
}

function removeDuplicates(s: string, k: number): string {
	// Upon iterating over s, we'll use the stack to keep track of the count per character
	// Pushing onto the stack is done with .push; popping is achieved with splice; 
	// Peeking using stack[stack.length -1] 
	let stack: StackVal[] = [];
    let result: string = "";
    for(let i = 0; i < s.length; i++) {
        // If the stack is non empty & the last character equals s[i], increment count
		// Else push new char onto the stack
		if(stack.length > 0 && stack[stack.length - 1].char === s[i])
            stack[stack.length - 1].count++;
        else
            stack.push({char: s[i], count: 1});
        // When the count of the char at the top reaches k, pop
        if(stack[stack.length - 1].count === k) {
            stack.splice(stack.length-1, 1);
        }
    }
	// Compute result by concatenating all characters and repeating them count times
    for(let i = 0; i < stack.length; i++) {
        if(stack[i].count < k) result += stack[i].char.repeat(stack[i].count);
    }
    return result;
};