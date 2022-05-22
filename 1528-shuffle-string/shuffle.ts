function restoreString(s: string, indices: number[]): string {
    let str = new Array(indices.length);   
    for(let i=0; i<indices.length;i++){
        str[indices[i]] = s[i];
    }
    return str.join("");  
};