function divideString(s: string, k: number, fill: string): string[] {
    let arr = []
    for (let i=0; i<s.length; i+=k){
        if (i+k <= s.length) {
            arr.push(s.slice(i,i+k))
        } else {
            let size = k - s.slice(i,i+k).length 
            arr.push(s.slice(i,i+k) + (fill.repeat(size)))
        }
        
    }
    return arr

    //alternative solution

    // const numChunks = s.match(new RegExp('.{1,' + k + '}', 'g'));  // split string into array with length k
    
    // const arr = [];

    // for (let i = 0; i < numChunks.length; i++) {      // loop the array 
    //   if (numChunks[i].length < k) {                 // check if one of the array elements has a length less than k
    //     let r = numChunks[i].padEnd(k, fill);        // use padEnd() to fill the string with "fill" variable
    //     arr.push(r);                                // add to the array
    //   } else {                                      //otherwise, just add the item
    //     arr.push(numChunks[i])
    //   }
    // }
    
    // return arr;
};