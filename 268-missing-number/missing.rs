impl Solution {
    pub fn missing_number(nums: Vec<i32>) -> i32 {
        
         ((0+nums.len()) * (nums.len()+1) / 2 ) as i32 - nums.into_iter().sum::<i32>() 
    }
}