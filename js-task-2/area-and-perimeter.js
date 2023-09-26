const readline = require('readline');

class Rectangle {
  constructor(length, breadth) {
    this.length = length;
    this.breadth = breadth;
  }

  calculateArea() {
    return this.length * this.breadth;
  }

  calculatePerimeter() {
    return 2 * (this.length + this.breadth);
  }
}

const rectangle1 = new Rectangle(5, 10);
const rectangle2 = new Rectangle(3, 8);
const rectangle3 = new Rectangle(7, 12);

function getUserInput() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve) => {
    rl.question("Enter the length of the rectangle: ", (length) => {
      rl.question("Enter the breadth of the rectangle: ", (breadth) => {
        rl.close();
        const parsedLength = parseFloat(length);
        const parsedBreadth = parseFloat(breadth);

        if (isNaN(parsedLength) || isNaN(parsedBreadth)) {
          console.log("Invalid input. Please enter valid numbers for length and breadth.");
          resolve(null);
        } else {
          resolve(new Rectangle(parsedLength, parsedBreadth));
        }
      });
    });
  });
}

console.log("Rectangle 1:");
console.log("Area: " + rectangle1.calculateArea());
console.log("Perimeter: " + rectangle1.calculatePerimeter());

console.log("\nRectangle 2:");
console.log("Area: " + rectangle2.calculateArea());
console.log("Perimeter: " + rectangle2.calculatePerimeter());

console.log("\nRectangle 3:");
console.log("Area: " + rectangle3.calculateArea());
console.log("Perimeter: " + rectangle3.calculatePerimeter());

async function main() {
  const userRectangle = await getUserInput();

  if (userRectangle) {
    console.log("\nUser-Provided Rectangle:");
    console.log("Area: " + userRectangle.calculateArea());
    console.log("Perimeter: " + userRectangle.calculatePerimeter());
  }
}

main();