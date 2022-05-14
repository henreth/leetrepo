/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLastWord = function(s) {
    return s.trim().split(' ').pop().length
};

// /**
//  * @param {string} s
//  * @return {number}
//  */
//  var lengthOfLastWord = function(s) {
//     s = s.split(' ').filter(x=>x!='')
//     return s[s.length-1].length
// };