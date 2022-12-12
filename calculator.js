const calculator = {
    
    add(a, b) {
        if (typeof a === 'number' && typeof b === 'number') return a + b;  
        return 'Please input numbers';
    },

    subtract(a, b) {
        if (typeof a === 'number' && typeof b === 'number') return a - b;
        return 'Please input numbers';
    },

    divide(a, b) {
        if (typeof a === 'number' && typeof b === 'number') {
            if (b != 0) {
                return Number(Math.round(a / b + 'e4') + 'e-4');
            } else {
                return 'Dividend cannot be 0!';
            }
        } else {
            return 'Please input numbers';
        }
    },

    multiply(a, b) {
        if (typeof a === 'number' && typeof b === 'number') return a * b; 
        return 'Please input numbers';
    }
}

module.exports = calculator; 