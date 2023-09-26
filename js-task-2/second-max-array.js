const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function findSecondMax(arr) {
  if (arr.length < 2) {
    return "The array should have at least two elements";
  }

  let max = -Infinity;
  let secondMax = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      secondMax = max;
      max = arr[i];
    } else if (arr[i] > secondMax && arr[i] !== max) {
      secondMax = arr[i];
    }
  }

  if (secondMax === -Infinity) {
    return "There is no second maximum in the array";
  }

  return secondMax;
}

rl.question("Enter a list of numbers separated by commas (e.g., 5, 10, 2, 8, 9): ", (input) => {
  const inputArray = input.split(",").map(Number);
  const result = findSecondMax(inputArray);
  console.log("The second maximum number is:", result);
  rl.close();
});