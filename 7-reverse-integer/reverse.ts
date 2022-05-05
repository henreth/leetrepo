function reverse(x: number): number {
    let maxInteger = Math.pow(2, 31) - 1;
    let num = Math.sign(x)*Number(Math.abs(x).toString().split("").reverse().join(""))
    return Math.abs(num) > maxInteger ? 0 : num
};