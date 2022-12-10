//A reverseString function that takes a string and returns it reversed.
const reverseString = require('./reverseString');

test('reverse a word', () => {
    expect(reverseString('panda')).toBe('adnap');
});

test('reverse a phrase', () => {
    expect(reverseString('ice cream')).toBe('maerc eci');
});

test('reverse a sentence, ingnoring punctuation', () => {
    expect(reverseString('row, row, row a boat')).toBe('taob a wor ,wor ,wor');
});

test('return error msg for a non-string', () => {
    expect(reverseString(123)).toBe('please enter a valid string');
});