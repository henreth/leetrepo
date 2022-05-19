class Solution:
    def cellsInRange(self, s: str) -> List[str]:
        rows = s.split(':')
        startLetter = ord(rows[0][0])
        endLetter = ord(rows[1][0])
    
        res = []
        for i in range(endLetter-startLetter+1):
            letter = chr(startLetter+i)
            for j in range(int(rows[1][1]) - int(rows[0][1])+1):
                res.append(letter+str(j+int(rows[0][1])))

        return res
        