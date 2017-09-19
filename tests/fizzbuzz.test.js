import test from 'tape';

// COMPONENT!!!! --------------------------------------------------------------------
const Num = function (numObj) {
    const {pos, value} = numObj;
    return {pos, value}
};

const FizzBuzz = function (options = {range: {start: 1, end: 100}}) {

    const FIZZ = 3;
    const BUZZ = 5;
    const TRANSFORM = {};
    TRANSFORM[FIZZ] = 'Fizz';
    TRANSFORM[BUZZ] = 'Buzz';

    const {start, end} = options.range;
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

// TESTS!!!! ------------------------------------------------------------------------
test('-------- Component: returning the first element...', (assert) => {
    const message = 'The first element must be {pos: 1, value: 1} because is not divisible by 3 or 5.';
    const expected = {pos: 1, value: 1};

    const requestedNumber = Num({pos: 1});
    const fizzbuzz = FizzBuzz();
    const actual = fizzbuzz.print(requestedNumber);

    assert.deepEqual(actual, expected, message);

    assert.end();
});

test('-------- Component: returning the third element...', (assert) => {
    const message = 'The third element must be {pos:3, value:"Fizz"} because 3 is divisible by 3.';
    const expected = {pos: 3, value: "Fizz"};

    const fizzbuzz = FizzBuzz();
    const actual = fizzbuzz.print({pos: 3});

    assert.deepEqual(actual, expected, message);

    assert.end();
});

test('-------- Component: returning the fifth element...', (assert) => {
    const message = 'The fifth element must be {pos:5, value:"Buzz"} because 5 is divisible by 5.';
    const expected = {pos: 5, value: "Buzz"};

    const fizzbuzz = FizzBuzz();
    const actual = fizzbuzz.print({pos: 5});

    assert.deepEqual(actual, expected, message);

    assert.end();
});

test('-------- Component: returning the 15th element...', (assert) => {
    const message = 'The 15th element must be {pos:15, value:"FizzBuzz"} because 15 is divisible by 3 and 5.';
    const expected = {pos: 15, value: "FizzBuzz"};

    const fizzbuzz = FizzBuzz();
    const actual = fizzbuzz.print({pos: 15});

    assert.deepEqual(actual, expected, message);

    assert.end();
});

/*
test('-------- Component: returning a list of the first 15th values...', (assert) => {
    const message = 'Some value doesn\'t match';
    const expected = [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz'];

    const fizzbuzz = FizzBuzz();
    const actual = fizzbuzz.list(0, 14);

    assert.deepEqual(actual, expected, message);

    assert.end();
});
*/