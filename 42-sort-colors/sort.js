/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var sortColors = function(nums) {
    // let red=0, white=0, blue=0
    let [red,white,blue] = [0,0,0]

    for(let elem of nums){ //iterate and update values based on presence
        if(elem == 0){ white++}
        else if ( elem == 1){ red++}
        else{ blue++}
    }

    nums.length=0 //reset array to nothing

    // update nums with the value * count in the correct order
    for(let i=0;i<white;i++){ nums.push(0)} 
    for(let i=0;i<red;i++){ nums.push(1)}
    for(let i=0;i<blue;i++){ nums.push(2)  }
};