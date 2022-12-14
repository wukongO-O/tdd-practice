//A caesarCipher function that takes a string and returns it with each character “shifted”.

const caesarCipher = require('./caesarCipher');

test('shift letter to encrypt', () => {
    expect(caesarCipher('banana', 2).encrypt()).toBe('dcpcpc');
});

test('shift letter to decrypt', () => {
    expect(caesarCipher('mkyk', 2).decrypt()).toBe('kiwi');
})