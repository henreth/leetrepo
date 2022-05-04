var reverseWords = function(s) {
    let words = s.match(/[^ ]+/g)
    let newString = []
    for (word of words) {
        result.unshift(word)
    }

    return newString.join(" ")
}