function removeDuplicates(s: string): string {
    const arr = [];
    for (const char of s) {
      arr[arr.length - 1] === char ? arr.pop() : arr.push(char);
    }
    return arr.join('');
  };