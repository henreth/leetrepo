function reverseVowels(s: string): string {
    let left = 0
    let right=(s.length -1)
    let splitS = s.split('')
    let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
    while (left < right){
         if(!vowels.includes(splitS[left])){
             left += 1
         } else {
             if(!vowels.includes(splitS[right])){
                 right -=1
             } else{
                 let leftValue = splitS[left]
                 let rightValue = splitS[right]
                 splitS[left] = rightValue
                 splitS[right] = leftValue
                 left +=1
                 right -=1
             }
         }
    }
    return splitS.join('')
};