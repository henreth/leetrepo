/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    // if (s.length===1){return 1}
    let sub = ''
    let longest = ''
    for (let char of s){
        if (sub.split('').includes(char)){
            console.log(longest.indexOf(char))
            if (longest.length < sub.length ){
                longest = sub
            }
            if (longest.indexOf(char)===0){
                
                sub = sub.slice(1,)+char
            } else {
                sub = char
            }

        } else {
            sub+=char
            if (longest.length < sub.length){
                longest=sub
            }
        }
    }
    console.log(longest)
    return longest.length
};