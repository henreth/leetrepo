/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
      const arr = [];
  for (const char of s) {
    arr[arr.length - 1] === char ? arr.pop() : arr.push(char);
  }
  return arr.join('');
};


// const removeDuplicates = s => {
//     const s2 = s.replace(/(.)\1/g, '');
//     return s2.length === s.length ? s : removeDuplicates(s2);
//   };

// const removeDuplicates = s => {
//     const arr = s.split('');
//     let ans = 0;
//     for (let i = 0; i < arr.length; ++i) {
//       ans === 0 || arr[i] !== arr[ans - 1] ? (arr[ans++] = arr[i]) : --ans;
//     }
//     return arr.slice(0, ans).join('');
//   };