/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
 var restoreString = function(s, indices) {
    let str = [...Array(indices.length).keys()]
    str.forEach((num,i)=>str[indices[i]] = s[i])
    return str.join('')
};


// Simpler solution:
//  var restoreString = function(s, indices) {
//     let str = new Array(indices.length);   
//     for(let i=0; i<indices.length;i++){
//         str[indices[i]] = s[i];
//     }
//     return str.join("");  
// };