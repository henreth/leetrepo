# @param {String} haystack
# @param {String} needle
# @return {Integer}
def str_str(haystack, needle)
     if needle == '' || needle == haystack
         0
     end 
    if needle.size > haystack.size
        -1
    end
    
    for i in (0..(haystack.size-needle.size+1))
            if haystack[i] == needle[0]
                for j in (0..needle.size)
                    if needle[j] != haystack[i+j]
                        break
                    else if j == needle.size-1
                        return i 
                    end
                end
            end
        
    end
    end
    
    return -1 
         
end