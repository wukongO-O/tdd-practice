//A caesarCipher function that takes a string and returns it with each character “shifted”.

const caesarCipher = require('./caesarCipher');

test('shift letter to encrypt', () => {
    expect(caesarCipher('BananA', 2).encrypt()).toBe('dcpcpc');
});

test('shift letter across z and a to encrypt', () => {
    expect(caesarCipher('yes', 3).encrypt()).toBe('bhv');
});

test('rewind the shift order when key > 26', () => {
    expect(caesarCipher('pizza', 53).encrypt()).toBe('qjaab');
});

test('shift letter in backward order when key < 0', () => {
    expect(caesarCipher('cheese', -2).encrypt()).toBe('afccqc');
});

test('encrypt to the same str when key = 0', () => {
    expect(caesarCipher('CAKE', 0).encrypt()).toBe('CAKE');
});

test('shift letter to decrypt', () => {
    expect(caesarCipher('MkYk', 2).decrypt()).toBe('kiwi');
});

test('shift letter from a backward to z to decrypt', () => {
    expect(caesarCipher('apple', 2).decrypt()).toBe('ynnjc');
});

test('decrypt to the same str when key = 0', () => {
    expect(caesarCipher('Watermelon', 0).decrypt()).toBe('Watermelon');
})

test('decrypt when key > 26', () => {
    expect(caesarCipher('papaya', 28).decrypt()).toBe('nynywy');
})

test('decrypt when key < 0', () => {
    expect(caesarCipher('coconut', -1 ).decrypt()).toBe('dpdpovu');
})