/**
 * @param {string} title
 * @return {string}
 */
// faster than the TS solution
 var capitalizeTitle = function(title) {
    let newTitle=[]
    title.split(' ').forEach(word=>{
        if (word.length>2){
             newTitle.push(word[0].toUpperCase() + word.toLowerCase().slice(1,))
        } else {
            newTitle.push(word.toLowerCase())
        }
    })
    
    return newTitle.join(' ')
};