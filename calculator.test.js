//A calculator object that contains functions for the basic operations: add, subtract, divide, and multiply. Each of these functions should take two numbers and return the correct calculation.

const calc = require('./calculator');

test('add numbers', () => {
    expect(calc.add(3, 4.5)).toBe(7.5);
});

test('add strings and show error msg', () => {
    expect(calc.add('3', '4')).toBe('Please input numbers');
});

test('subtract numbers', () => {
    expect(calc.subtract(9, 1.5)).toBe(7.5);
});

test('non-Number input to subtract and show error msg', () => {
    expect(calc.subtract('4', '3')).toBe('Please input numbers');
});

test('divide numbers', () => {
    expect(calc.divide(4, -2)).toBe(-2);
});

test('divide 0 and show error msg', () => {
    expect(calc.divide(4, 0)).toBe('Dividend cannot be 0!');
});

test('non-number input to divide and show error msg', () => {
    expect(calc.divide('3', '2')).toBe('Please input numbers');
});

test('divide returns floating number & no rounding error when the last digit is 5', () => {
    expect(calc.divide(100.05, 100)).toBe(1.0005);
});

test('divide returns floating number up to 4 decimal places & no rounding error', () => {
    expect(calc.divide(10, 3)).toBe(3.3333);
});

test('divide returns floating number up to 4 demical places & no rounding error', () => {
    expect(calc.divide(5, 3)).toBe(1.6667);
});

test('multiply numbers', () => {
    expect(calc.multiply(2, 33)).toBe(66);
});

test('show error msg for non-Number input to multiply', () => {
    expect(calc.multiply(2, 3)).toBe(6);
});

test('multiply w floating numbers & no rounding error', () => {
    expect(calc.multiply('2', '3')).toBe('Please input numbers');
});