function convertToTitle(n: number): string {
    let res = ""
    while (n){
        res = String.fromCharCode('A'.charCodeAt(0) + (n-1) % 26) + res
        n = Math.floor((n-1) / 26)
    }
    
    return res
};