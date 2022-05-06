function isAnagram(str1: string, str2: string): boolean {
  const counter1: Map<string, number> = createCounter(str1);
  const counter2: Map<string, number> = createCounter(str2);
  return areEqual(counter1, counter2);
};

const createCounter = (str: string): Map<string, number> => {
  const counter = new Map<string, number>();
  for (let char of str) counter.set(char, (counter.get(char) ?? 0) + 1);
  return counter;
};

const areEqual = (
  map1: Map<string, number>,
  map2: Map<string, number>
): boolean => {
  if (map1.size !== map2.size) return false;

  for (const [key1, value1] of map1) {
    const value2: number | undefined = map2.get(key1);
    if (value1 !== value2) return false;
  }
  return true;
};