def longest_common_prefix(strs)
    return "" if strs.empty? 
    s = ""
    base = strs[0]
    for i in 0..base.length-1
        if strs.all?{|x| x[i] == base[i]}
            s += base[i]
        else
            break
        end
    end
    s
end

# Take a string (the first element in the array)
# Go through the the base string, and through each iteration check if the letter at index i exists in all the other words in the array. 
# If it does, append it to the string s. 
# If you reach a case where the letter at index i does not exist in some word in the array, break.