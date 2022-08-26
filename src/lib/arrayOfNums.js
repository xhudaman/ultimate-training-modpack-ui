export const getArrayOfNumbers = (min, max, increment) => {
  const numbers = [];

  for (let i = min; i <= max; i++) {
    if (i % increment === 0) numbers.push(i);
  }

  return numbers;
};
