/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(n) {
//     console.log('a'.charCodeAt(0)) //returns 97, where 0 is the index of the string 
//     console.log(String.fromCharCode(98)) // finds the character at the unicode index of 98
    
    let res = ""
    while (n){
        res = String.fromCharCode('A'.charCodeAt(0) + (n-1) % 26) + res
        n = Math.floor((n-1) % 26)
    }
    
    return res
};