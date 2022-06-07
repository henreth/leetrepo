function canConstruct(ransomNote: string, magazine: string): boolean {
    const map = {};
    for(let letter of magazine) {
        map[letter] ? map[letter]++ : map[letter] = 1
    }
    
    for(let letter of ransomNote) {
        if(!map[letter]) {
            return false;
        } 
        map[letter]--;
    }
    return true;
};