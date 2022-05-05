function capitalizeTitle(title: string): string {
    let newTitle = []
    title.split(' ').forEach(word => {
        word.length > 2 ? newTitle.push(word[0].toUpperCase() + word.toLowerCase().slice(1,)) : newTitle.push(word.toLowerCase())
    })
    return newTitle.join(' ')

    // alternative TS solution
    // return title.toLowerCase().split(' ').map(word=>word.length>2 ? word[0].toUpperCase() + word.slice(1,) : word).join(' ')
};