//test capitalize function that takes a string and returns it with the first character capitalized
const capitalize = require('./capitalize');

test('1st letter of a word is capitalized', () => {
    expect(capitalize('sk8er!')).toBe('Sk8er!');
});

test('1st letter of a sentence is capitalized', () =>{
    expect(capitalize('i love ramen')).toBe('I love ramen');
});

test('non-alphabetic phrase returns the original string', () => {
    expect(capitalize('123!@#')).toBe('123!@#');
});

test('1st letter not at index0 is capitalized', () => {
    expect(capitalize('99 bottles of beer on the wall')).toBe('99 Bottles of beer on the wall');
})