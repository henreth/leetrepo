/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    if (s.length % 2 !=0) return false // if the string has an odd length, then there is an unmatched bracket/parantheses
    const stack = [];
    const map = { // dictionary for brackets that corresponds opening brackets for keys and their matching closing brackets for values
      '(': ')',
      '[': ']',
      '{': '}'
    }
    
    for (let i = 0 ; i < s.length ; i++) { //iterate through the string 
        let c = s[i];
        if (map[c]) { // if the current character is an opening... 
          stack.push(map[c])  // add the closing bracket to the stack
        } else if (c !== stack.pop()) { // if the last value is not the same type of the current value, return false
          return false;
        } 
    }
    
    return !stack.length; // if the stack has a length of 0, then all the brackets will have been matched
};