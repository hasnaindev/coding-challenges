/**
 * A map that contains integer values
 * for roman numberic number system.
 */
const romanNumbersMap = new Map([
  ['I', 1],
  ['V', 5],
  ['X', 10],
  ['L', 50],
  ['C', 100],
  ['D', 500],
  ['M', 1000],
]);

/**
 * Big O notation of this solution,
 * best case O(1),
 * worst and average case O(n).
 */
const romanToInt = (romanNumbers) => {
  if (romanNumbers.length <= 1)
    return romanNumbersMap.get(romanNumbers);

  let result = 0;

  for (let i = romanNumbers.length - 1; i >= 0; i--) {
    const numberOne = romanNumbersMap.get(romanNumbers[i]);
    const numberTwo = romanNumbersMap.get(romanNumbers[i - 1]);

    if (numberTwo < numberOne) {
      i--;
      result += numberOne - numberTwo;
    } else
      result += numberOne;
  }

  return result;
};

console.log(romanToInt('IV')); // 4
console.log(romanToInt('V')); // 5
console.log(romanToInt('IX')); // 9
console.log(romanToInt('LVIII')); // 58
console.log(romanToInt('MCMXCIV')); // 1994
console.log(romanToInt('MCDLXXVI')); // 1476
