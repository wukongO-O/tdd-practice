function caesarCipher(str, key) {
    const regex = /[a-zA-Z]/;

    const encrypt = () => {
        let encryptedStr = '';

        for (let i = 0; i < str.length; i++) {
            if (str.charAt(i).match(regex)) {
                const shiftedCharUnicode = str.charCodeAt(i) + key;
                encryptedStr += String.fromCharCode(shiftedCharUnicode);
            } else {
                encryptedStr += str.charAt(i);
            }    
        }

        return encryptedStr;
    };

    const decrypt = () => {
        let decryptedStr = '';
        
        for (let j = 0; j < str.length; j++) {
            if (str.charAt(j).match(regex)) {
                const origCharUnicode = str.charCodeAt(j) - key;
                decryptedStr += String.fromCharCode(origCharUnicode);
            } else {
                decryptedStr += str.charAt(j);
            }
        }

        return decryptedStr;
    };

    return {
        encrypt,
        decrypt
    }
};

module.exports = caesarCipher;