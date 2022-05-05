use std::collections::HashMap;

impl Solution {
    
    pub fn roman_to_int(s: String) -> i32 {
        let table: HashMap<char, i32> = [
            ('M', 1000),
            ('D', 500),
            ('C', 100),
            ('L', 50),
            ('X', 10),
            ('V', 5),
            ('I', 1)
        ].iter().cloned().collect();
        
        let mut res = 0;
        let mut pre = 'I';
        
        for c in s.chars().rev() {
            // every input is valid, just unwrap
            if table.get(&c).unwrap() < table.get(&pre).unwrap() {
                res -= table.get(&c).unwrap();
            } else {
                res += table.get(&c).unwrap();
            }
            pre = c;
        }
        res
    }
}