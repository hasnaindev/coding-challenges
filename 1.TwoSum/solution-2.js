/**
 * Big O notation of this solution,
 * best case O(n),
 * worst and average case O(n*2).
 */
const twoSum = (array = [], target = 0) => {
  const map = new Map();

  for (let i = 0; i < array.length; i++) map.set(array[i], i);

  for (let i = 0; i < array.length; i++) {
    if (map.has(array[i] - target)) {
      const index = map.get(array[i] - target);
      if (index !== i) return [i, index];
    }
  }
};

console.log(twoSum([2, 5, 9, 1, 3, 7, 2], 4));
