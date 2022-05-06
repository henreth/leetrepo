function lengthOfLongestSubstring(s: string): number {
    let sub = ''
    let longest = ''
    for (let char of s){
        if (sub.split('').includes(char)){
            if (longest.length < sub.length ){
                longest = sub
            }
            if (longest.indexOf(char)- longest.indexOf(char,longest.indexOf(char))===1){
                sub = char
            } else {
                sub = sub.slice(sub.indexOf(char)+1,) + char
            }

        } else {
            sub+=char
            if (longest.length < sub.length){
                longest=sub
            }
        }
    }
    return longest.length
};

// Alternative solution:
// function lengthOfLongestSubstring(s: string): number {
//     const scanner: string[] = []
//     let longest = 0
  
//     for (const char of s) {
//       const possibleIndex = scanner.indexOf(char)
  
//       if (possibleIndex !== -1) { scanner.splice(0, possibleIndex + 1) }
//       scanner.push(char)
//       longest = Math.max(longest, scanner.length)
//     }
  
//     return longest
//   }