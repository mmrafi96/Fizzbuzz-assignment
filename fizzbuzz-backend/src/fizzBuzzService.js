// src/fizzBuzzService.js

const processFizzBuzz = (values) => {
    return values.map((value) => {
        let result = { input: value, output: '', divisions: [] };

        if (isNaN(value) || value.trim() === '') {
            result.output = 'Invalid item';
        } else {
            const num = Number(value);
            const isFizz = num % 3 === 0;
            const isBuzz = num % 5 === 0;

            if (isFizz && isBuzz) {
                result.output = 'FizzBuzz';
            } else if (isFizz) {
                result.output = 'Fizz';
            } else if (isBuzz) {
                result.output = 'Buzz';
            } else {
                result.output = num.toString();
                result.divisions.push(`Divided ${num} by 3`);
                result.divisions.push(`Divided ${num} by 5`);
            }
        }

        return result;
    });
};

module.exports = { processFizzBuzz };
