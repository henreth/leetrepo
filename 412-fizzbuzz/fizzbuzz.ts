function fizzBuzz(n: number): string[] {
    // [..Array(n).keys()] creates an array of a range from 0 to n
    // .keys is important to create the values
    return [...Array(n).keys()].map((i) => {
      const num = i + 1;
      if (num % 3 === 0 && num % 5 === 0) return 'FizzBuzz';
      if (num % 3 === 0) return 'Fizz';
      if (num % 5 === 0) return 'Buzz';
      return num.toString();
    });
  }