# @param {String[]} words
# @return {String}
def first_palindrome(words)
    for word in words
        if word == word.reverse
            return word
        end
    end 
    
   ""
    
end