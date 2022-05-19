function titleToNumber(s: string): number {
    let res = 0;
    for (let i = 0; i < s.length; i++) {
      // s.charCodeAt(i) - 64, finds the unicode value of the string. has to reduce by 64 to find the lowercase value 
      // as that starts at 1 instead of the upper case
      // * 26 ** (s.length - i -1) determines the position of the current character
      // ie: if its just A or AA, etc
      res += (s.charCodeAt(i) - 64) * 26 ** (s.length - i - 1);  
    }
    return res;
  };