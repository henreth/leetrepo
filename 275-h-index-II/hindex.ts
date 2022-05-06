function hIndex(citations: number[]): number {
    citations.sort((a,b)=>b-a)
    let h;
    for(let i=0;i<citations.length;i++){
        console.log(citations[i], i+1)
        if(citations[i]<i+1) return i
        h=i+1
    }
    return h
};