function capitalize(str) {
    const letter1 = str.charAt(0);
    const regex = /[a-zA-Z]/;

    if (regex.test(letter1)) {
        return str.replace(letter1, letter1.toUpperCase());
    } else {
        return str;
    }
};

module.exports = capitalize;