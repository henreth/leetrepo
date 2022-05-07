/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    let sub = ''
    let longest = ''
    for (let char of s){
        if (sub.split('').includes(char)){
            if (longest.length < sub.length ){
                longest = sub
            }
            if (longest.indexOf(char)- longest.indexOf(char,longest.indexOf(char))===1){
                sub = char
            } else {
                sub = sub.slice(sub.indexOf(char)+1,) + char
            }

        } else {
            sub+=char
            if (longest.length < sub.length){
                longest=sub
            }
        }
    }
    return longest.length
};