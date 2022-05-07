pub fn str_str(haystack: String, needle: String) -> i32 {
        let window_size = needle.len();
        let needle = needle.as_bytes();
        if window_size == 0 { return 0i32 }
        match haystack.as_bytes()
            .windows(window_size)
            .position(|slice| slice == needle ) {
                Some(x) => x as i32,
                _ => -1i32
        }
            
    }