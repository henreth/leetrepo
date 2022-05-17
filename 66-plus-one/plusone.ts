function plusOne(digits: number[]): number[] {
    let last = digits.length - 1; //get index of last digit
    digits[last]++; //increase last digit 
    for (let i = last; i > 0 && digits[i] === 10; i--) { //if the last digit is = 10 and is not the first index
      digits[i] = 0; //reduce the last digit to 0
      digits[i - 1]++; // increase the digit infront of it 
    }
    if (digits[0] === 10) { // if the last and only digit is now 10
      digits[0] = 0; // reduce the digit to 0 
      digits.unshift(1); //add a 1 to the front of the array 
    }
    return digits;
};