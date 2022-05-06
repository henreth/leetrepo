/**
 * @param {number[]} citations
 * @return {number}
 */
 var hIndex = function(citations) {
    citations.sort((a,b)=>b-a)
    for(i=0;i<citations.length;i++){
        console.log(citations[i],i+1)
        if(citations[i]<i+1) return i
    }
    return i
};