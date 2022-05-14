function lengthOfLastWord(s: string): number {
    let i = s.length-1;
    let length = 0;
    while(i >= 0){ // move backwards through the string 
        if(s[i] != " "){ //stop when we find a non-space character
            while(i >= 0 && s[i] != " "){ //keep iterating until we find the last letter of the last word
                // stop adding to length once we hit a space
                length += 1;
                i -= 1;
            }
            return length;
        }
        i -= 1;
    }
};