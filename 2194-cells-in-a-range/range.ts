function cellsInRange(s: string): string[] {
    let rows = s.split(':')
    let startLetter = rows[0].charCodeAt(0)
    let endLetter = rows[1].charCodeAt(0)
    
    let res = []
    for (let j = Number(startLetter); j <= Number(endLetter); j++){
        let letter = String.fromCharCode(j)
        for (let i = Number(rows[0][1]); i <= Number(rows[1][1]); i++ ){
                res.push(letter+i)
        }
    }

    return res
    
};