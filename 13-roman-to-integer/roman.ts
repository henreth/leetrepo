function romanToInt(s: string): number {
    let symbols = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    };
    let count = 0;

    for (let i = 0; i < s.length; i += 1) {
        symbols[s[i]] < symbols[s[i + 1]] ? count -= symbols[s[i]] : count += symbols[s[i]]
    }

    return count
};