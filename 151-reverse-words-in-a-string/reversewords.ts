function reverseWords(s: string): string {
    let words = s.match(/[^ ]+/g)
    // .match searches the string for the input and returns that input if so
    // /g searches the string globally and returns the input the number of times the input appears 
    return words.reverse().join(' ')
}

// function reverseWords(s: string): string {
//     let words = s.match(/[^ ]+/g)
//     let newString = []
//     for (let word of words) {
//         newString.unshift(word)
//     }
//     return newString.join(" ")
// };