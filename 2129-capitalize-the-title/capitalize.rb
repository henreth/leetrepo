# @param {String} title
# @return {String}
def capitalize_title(title)
    newTitle = []
    title.downcase.split(' ').map{|word| 
        if word.size >2 
            newTitle.push(word.capitalize)
        else
            newTitle.push(word)
        end 
    }
    newTitle.join(' ')
    
    # alternative much faster solution
    # title.split.map {|word| word.length < 3 ? word.downcase : word.capitalize}.join(" ")
end