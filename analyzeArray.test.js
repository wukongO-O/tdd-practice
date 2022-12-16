//An analyzeArray function that takes an array of numbers and returns an object with the following properties: average, min, max, and length
const analyzeArr = require('./analyzeArray');

test('analyze an array of numbers', () => {
    const arr1 = [2, 3, 5, -8, 11, 16, 8];
    expect(analyzeArr(arr1)).toEqual({average: 5.29, min: -8, max: 16, length: 7});
})