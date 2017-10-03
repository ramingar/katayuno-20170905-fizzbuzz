import Num from './num'

const FizzBuzz = function ({caseSensitive = true, range = {start: 1, end: 100}} = {}) {

    const FIZZ = 3;
    const BUZZ = 5;
    const TRANSFORM = {};
    TRANSFORM[FIZZ] = 'Fizz';
    TRANSFORM[BUZZ] = 'Buzz';

    const {start, end} = range;
    let listNumbers = [];

    const isFizz = function (number) {
        return isDivisible(FIZZ, number);
    };

    const isBuzz = function (number) {
        return isDivisible(BUZZ, number);
    };

    const isDivisible = function (divisor, number) {
        return 0 === number % divisor;
    };

    const print = function (requestedNumber) {
        return listNumbers[requestedNumber.pos];
    };

    (() => {
        for (let ii = start; ii <= end; ii++) {
            let value = ii;
            if (isFizz(ii) && isBuzz(ii)) {
                value = TRANSFORM[FIZZ] + TRANSFORM[BUZZ];
            } else if (isFizz(ii)) {
                value = TRANSFORM[FIZZ];
            } else if (isBuzz(ii)) {
                value = TRANSFORM[BUZZ];
            }
            listNumbers[ii] = Num({pos: ii, value: value});
        }
    })();

    return {print}
};

export default FizzBuzz;