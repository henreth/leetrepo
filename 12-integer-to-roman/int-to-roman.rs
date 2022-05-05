const DICT: [(i32, &str); 13] = [
    (1000, "M"),
    (900, "CM"),
    (500, "D"),
    (400, "CD"),
    (100, "C"),
    (90, "XC"),
    (50, "L"),
    (40, "XL"),
    (10, "X"),
    (9, "IX"),
    (5, "V"),
    (4, "IV"),
    (1, "I"),
];

impl Solution {
    pub fn int_to_roman(num: i32) -> String {
        let mut answer = String::new();
        let mut num = num;
        while num > 0 {
            if let Some(&(n, s)) = DICT.iter().find(|(n, _)| *n <= num) {
                answer += s;
                num -= n;
            }
        }
        answer
    }
}