export const classicAddFunction = (...nums) => {
  let sum = 0;
  for (const num of nums) {
    sum += num;
  }

  if (nums.length > 5) {
    sum = Infinity;
  }

  return sum;
};
