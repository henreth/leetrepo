impl Solution {
    pub fn reverse_words(s: String) -> String {
        let mut res = String::with_capacity(s.len());
        for word in s.split_ascii_whitespace().rev() {
            res = res + word + " ";
        }
        res.trim_end().to_string()
    }
}