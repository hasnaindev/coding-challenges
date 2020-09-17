const isPalindrome = (x) => {
  if (x < 0) return false;
  x = x.toString();
  for (let i = 0, j = x.length - 1; i < Math.floor(x.length / 2); i++, j--)
    if (x[i] != x[j]) return false;
  return true;
};

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));
