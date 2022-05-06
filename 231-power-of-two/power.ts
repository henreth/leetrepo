function isPowerOfTwo(n: number): boolean {
    return (Math.log10(n) / Math.log10(2)) % 1 == 0;
};

// function isPowerOfTwo(n: number): boolean {
//     let exp = 0
//     let newN = n
//     while (newN >=2){
//         exp++
//         newN = newN / 2
//     }
//     return 2 ** exp === n
// };