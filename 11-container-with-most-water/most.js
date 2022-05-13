/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let area = 0;
    let length = height.length;
    let head = 0;
    let tail = length-1;
    while (tail - head > 0){
        let potArea = Math.min(height[head],height[tail]) * (tail - head);
        area = Math.max(area, potArea);
        if (height[head] > height[tail]){
            tail--;
        }else{
            head++;
        }
        
    }
    return area;
};