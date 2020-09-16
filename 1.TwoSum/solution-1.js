/**
 * Big O notation of this solution,
 * best case O(1),
 * worst and average case O(n^2).
 */
const twoSum = (array = [], target = 0) => {
  for (let i = 0; i < array.length - 1; i++)
    for (let j = i + 1; j < array.length; j++)
      if (array[i] + array[j] === target) return [i, j];
};

console.log(twoSum([2, 5, 9, 1, 3, 7, 2], 4));
