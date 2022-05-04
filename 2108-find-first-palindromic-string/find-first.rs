impl Solution {
    pub fn first_palindrome(words: Vec<String>) -> String {
        for word in &words {
            let half = word.len() / 2;
            if word.chars().take(half).eq(word.chars().rev().take(half)) {
                return word.to_string();
            }
        }
        "".to_string()
    }
}