/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(s) {
  let res = 0;
  for (let i = 0; i < s.length; i++) {
    res += (s.charCodeAt(i) - 64) * 26 ** (s.length - i - 1);  
  }
  return res;
};