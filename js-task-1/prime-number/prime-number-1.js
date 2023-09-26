function isPrime(number) {
  if (number <= 1) {
    return 0;
  }
  if (number <= 3) {
    return 1;
  }
  if (number % 2 === 0 || number % 3 === 0) {
    return 0;
  }
  let i = 5;
  while (i * i <= number) {
    if (number % i === 0 || number % (i + 2) === 0) {
      return 0;
    }
    i += 6;
  }
  return 1;
}

function printFirstNPrimes(n) {
  let count = 0;
  let number = 2;
  while (count < n) {
    if (isPrime(number)) {
      console.log(number);
      count++;
    }
    number++;
  }
}

function checkPrime() {
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

  readline.question('Enter a number: ', (input) => {
    const number = parseInt(input);
    if (isNaN(number)) {
      console.log('Invalid input!! Please enter a valid number');
    } else {
      if (isPrime(number)) {
        console.log(`${number} is a prime number`);
      } else {
        console.log(`${number} is not a prime number`);
      }
    }
    readline.close();
  });
}

const n = 100;
printFirstNPrimes(n);
checkPrime();
