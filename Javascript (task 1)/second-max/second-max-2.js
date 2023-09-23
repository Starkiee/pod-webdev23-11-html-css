const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const findSecondMax = function() {
    rl.question("Enter the first number: ", (num1) => {
        rl.question("Enter the second number: ", (num2) => {
            rl.question("Enter the third number: ", (num3) => {
                try {

                    const num1Float = parseFloat(num1);
                    const num2Float = parseFloat(num2);
                    const num3Float = parseFloat(num3);

                    const numbers = [num1Float, num2Float, num3Float];

                    if (numbers.some(isNaN)) {
                        throw new Error("Invalid input. Please enter valid numeric values.");
                    }

                    numbers.sort((a, b) => b - a);

                    const secondMax = numbers[1];

                    console.log(`The second maximum number is: ${secondMax}`);
                } catch (error) {
                    console.error(error.message);
                } finally {
                    rl.close();
                }
            });
        });
    });
};

findSecondMax();