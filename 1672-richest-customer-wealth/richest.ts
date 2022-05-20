function maximumWealth(accounts: number[][]): number {
    let max = 0;
    for (let customer of accounts){
        max = Math.max(max,customer.reduce((tot,val)=>tot+val))
    }
    return max
};

// Non-reduce function:
// function maximumWealth(accounts: number[][]): number {
//     let max = 0;
//     for (let customer of accounts){
//         let sum = 0
//         for (let account of customer){
//             sum += account        
//         }
//         max = Math.max(max,sum)
//     }
    
//     return max
// };