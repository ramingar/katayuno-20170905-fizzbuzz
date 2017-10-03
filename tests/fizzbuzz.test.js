import test from 'tape';
import Num from '../web/assets/src/js/num';
import FizzBuzz from '../web/assets/src/js/fizzbuzz';

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