/**
 * @param {string} s
 * @return {string}
 */
 var reverseWords = function(s) {
    let words= s.split(' ');
    let newS = ''
    words.filter(word=>word!='').forEach(word=>{
        if (newS===''){
            newS=word + newS
        } else {
            newS=word+' '+newS
        }
        })
    return newS
};


// var reverseWords = function(s) {
//     let words = s.match(/[^ ]+/g)
//     let newString = []
//     for (word of words) {
//         newString.unshift(word)
//     }

//     return newString.join(" ")
// }