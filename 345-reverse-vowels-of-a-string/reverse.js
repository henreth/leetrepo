/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let left = 0
    let right=(s.length -1)
    s = s.split('')
    let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
    while (left < right){
         if(!vowels.includes(s[left])){
             left += 1
         } else {
             if(!vowels.includes(s[right])){
                 right -=1
             } else{
                 let leftValue = s[left]
                 let rightValue = s[right]
                 s[left] = rightValue
                 s[right] = leftValue
                 // s[left], s[right] = s[right], s[left]
                 left +=1
                 right -=1
             }
         }
    }
    return s.join('')
};