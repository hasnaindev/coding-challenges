/**
 * Big O notation of this solution,
 * best case O(1),
 * worst and average case O(n).
 */
const twoSum = (array = [], target = 0) => {
  const map = new Map();
  for (let i = 0; i < array.length; i++) {
    if (map.has(target - array[i])) return [map.get(target - array[i]), i];
    map.set(array[i], i);
  }
};

console.log(twoSum([2, 5, 9, 1, 3, 7, 2], 4));
