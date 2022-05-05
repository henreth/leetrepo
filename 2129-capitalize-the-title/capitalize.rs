impl Solution {
    pub fn capitalize_title(title: String) -> String {
        title
            .split_whitespace()
            .map(|w| match w.len() {
                1 | 2 => w.to_ascii_lowercase(),
                _ => w[..1].to_ascii_uppercase() + &w[1..].to_ascii_lowercase(),
            })
            .collect::<Vec<String>>()
            .join(" ")
    }
}