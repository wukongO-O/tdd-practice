function caesarCipher(str, key) {
    const regex = /[a-zA-Z]/;
    key = key % 26; 

    const encrypt = () => {
        let encryptedStr = '';

        for (let i = 0; i < str.length; i++) {
            if (str.charAt(i).match(regex)) {
                if (key === 0) return str;
                //unicode: 65-90: A-Z; 97-122: a-z
                let shiftedCharUnicode = str.toLowerCase().charCodeAt(i) + key;
                //for shifting across z and a - forward & backward
                if (shiftedCharUnicode > 122) {
                    shiftedCharUnicode = shiftedCharUnicode - 26;
                } else if (shiftedCharUnicode < 97) {
                    shiftedCharUnicode = shiftedCharUnicode + 26;
                };

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
                if (key === 0) return str;
                
                let origCharUnicode = str.toLowerCase().charCodeAt(j) - key;

                if (origCharUnicode > 122) {
                    origCharUnicode = origCharUnicode - 26;
                } else if (origCharUnicode < 97) {
                    origCharUnicode = origCharUnicode + 26;
                };
                
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