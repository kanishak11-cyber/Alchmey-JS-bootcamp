// Your Goal: Halve 'em!
// The function halfValue takes an array of numbers. It should return a new array with all the original values halved.

// Odd numbers should be rounded up to the nearest whole number.

function halfValue(numbers) {
  console.log(numbers);
  let half = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) {
      half[i] = numbers[i] / 2;
      console.log(half[i]);
    } else {
      half[i] = (numbers[i] + 1) / 2;
      console.log(half[i]);
    }
  }
  return half;
}

module.exports = halfValue;
