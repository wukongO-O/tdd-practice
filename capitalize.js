function capitalize(str) {
    const regex = /[a-zA-Z]/;

    if (str.search(regex) != -1) {
        const toReplace = str.charAt(str.search(regex));
        return str.replace(toReplace, toReplace.toUpperCase());
    } else {
        return str;
    }
};

module.exports = capitalize;