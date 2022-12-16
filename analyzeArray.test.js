//An analyzeArray function that takes an array of numbers and returns an object with the following properties: average, min, max, and length
const analyzeArr = require('./analyzeArray');

test('analyze an array of numbers', () => {
    const arr1 = [2, 3, 5, -8, 11, 16, 8];
    expect(analyzeArr(arr1)).toEqual({average: 5.29, min: -8, max: 16, length: 7});
});

test('show error msg for an array of non-numbers', () => {
    const arr2 = ['1', '4', '9', 'zero'];
    expect(analyzeArr(arr2)).toBe('Array elements need to be numbers only.');
});

test('show error msg for an empty array', () => {
    const arr3 = [];
    expect(analyzeArr(arr3)).toBe('Array elements need to be numbers only.');
});