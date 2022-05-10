/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
    let [red,white,blue] = [0,0,0]

    for(let num of nums){ 
        if(num == 0){ white++}
        else if ( num == 1){ red++}
    }


    blue = (nums.length) - (white) - (red) 

    nums.length=0 

    for(let i=0;i<white;i++){ nums.push(0)} 
    for(let i=0;i<red;i++){ nums.push(1)}
    for(let i=0;i<blue;i++){ nums.push(2)  }
};