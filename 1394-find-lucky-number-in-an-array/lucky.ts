function findLucky(arr: number[]): number {
    let dict = {}
    for (let num of arr){
        dict[num] ? dict[num] ++ : dict[num] = 1
    }
    
    let lucky = -1;
    for (let num in dict){
        if (Number(num) === dict[num]){
            lucky = Math.max(lucky,Number(num))
        }
    }
    return lucky
};