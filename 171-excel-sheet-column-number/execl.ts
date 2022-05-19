function titleToNumber(s: string): number {
    let res = 0;
    for (let i = 0; i < s.length; i++) {
      console.log(s.charCodeAt(i), 26 ** (s.length - i - 1))
      res += (s.charCodeAt(i) - 64) * 26 ** (s.length - i - 1);  
        console.log(res)
    }
      console.log(' ')
    return res;
  };