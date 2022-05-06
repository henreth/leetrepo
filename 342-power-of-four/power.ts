function isPowerOfFour(n: number): boolean {
    return (Math.log10(n) / Math.log10(4)) % 1 == 0;
};