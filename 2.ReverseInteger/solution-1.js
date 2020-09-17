const reverse = (x) => {
  const reversed = Number.parseInt(
    x.toString().split("").reverse().join(""),
    10
  );

  return Math.pow(2, 31) < reversed ? 0 : x < 0 ? -reversed : reversed;
};

console.log(reverse(121));
console.log(reverse(-123));
console.log(reverse(120));
console.log(reverse(2147483511));
console.log(reverse(2147483548));
