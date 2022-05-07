/**
 * @param {number[]} nums
 * @return {number}
 */
 var missingNumber = function(nums) {
    let full =[]
    for (let i=0;i < nums.length+2;i++){
            full.push(i)
    }
    for (let num of full){
        if (!nums.includes(num)){return num}
    }
};