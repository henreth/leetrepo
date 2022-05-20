function mostWordsFound(sentences: string[]): number {
    let max = 0;
    for (let sent of sentences){
        max = Math.max(max,sent.split(' ').length)
    }
    
    return max
};