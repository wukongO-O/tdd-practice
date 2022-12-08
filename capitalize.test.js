//test capitalize function that takes a string and returns it with the first character capitalized
const capitalize = require('./capitalize');

test('1st letter of a word is capitalized', () => {
    expect(capitalize('sk8er!')).toBe('Sk8er!');
});

test('1st letter of a sentence is capitalized', () =>{
    expect(capitalize('i love ramen noodle')).toBe('I love ramen noodle');
});

test('non-alphabetic first character returns the original string', () => {
    expect(capitalize('99 bottles of beer on the wall')).toBe('99 bottles of beer on the wall');
});
