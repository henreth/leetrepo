/**
 * @param {string} s
 * @return {string}
 */

 var reverseWords = function(s) {
    let words = s.match(/[^ ]+/g)
    return words.reverse().join(' ')
}

// var reverseWords = function(s) {
//     let words = s.match(/[^ ]+/g)
//     let newString = []
//     for (word of words) {
//         newString.unshift(word)
//     }

//     return newString.join(" ")
// }

//  var reverseWords = function(s) {
//     let words= s.split(' ');
//     let newS = ''
//     words.filter(word=>word!='').forEach(word=>{
//         if (newS===''){
//             newS=word + newS
//         } else {
//             newS=word+' '+newS
//         }
//         })
//     return newS
// };
