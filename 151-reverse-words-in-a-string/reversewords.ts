function reverseWords(s: string): string {
    let words = s.match(/[^ ]+/g)
    let newString = []
    for (let word of words) {
        newString.unshift(word)
    }
    return newString.join(" ")
};