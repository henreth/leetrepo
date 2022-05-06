function sumZero(n: number): number[] {
    let arr = []
    let val = Math.round(n/2)

    if (n % 2!=0){
        arr.push(0)
    } else {
        val+=1
    }
        console.log(val)
        for (let i=1; i < val; i++){
            arr.push(i,-i)
        }


    return arr.sort((a,b)=>a-b)
    
};