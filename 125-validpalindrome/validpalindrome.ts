function isPalindrome(s: string): boolean {
    let input = s.replace(/[^0-9a-z]/gi, '').toLowerCase()
    let reverse =''
    input.split('').map(i=>reverse=i+reverse)
    return input===reverse
};