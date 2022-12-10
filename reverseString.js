function reverseString(str){
    if (typeof str === 'string') return str.split('').reverse().join('');
    return 'please enter a valid string';
    
};

module.exports = reverseString;