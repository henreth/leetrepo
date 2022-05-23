/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
        let ans = 0
        for (let i=0; i<s.length; i++){
            for (let j=0; j < 2; j++){
                let left = i
                let right = left + j

                while ((left >= 0) && (right < s.length) && (s[left] == s[right])){
                    ans += 1
                    left -= 1
                    right += 1
                }
            }
        }
        return ans
    
};