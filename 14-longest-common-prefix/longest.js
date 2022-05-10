/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (strs.length === 0) return '';
    const first = strs[0];

    for (let i = 0; i < first.length; i++) {
        for (let j = 1; j < strs.length; j++) {
            const other = strs[j];
            if (other[i] !== first[i]) {
                return other.slice(0, i);
            }
        }
    }

    return first;

};

// function longestCommonPrefix (strs) {
//     let ans = "";
//     for (i in strs[0]) {
//       if (!strs.every((el) => el[i] === strs[0][i])) { break; }
//       ans += strs[0][i];
//     }
//     return ans;
//   };