function analyzeArray(arr) {
    const validArr = (arr) => {
        if (arr.length != 0 && arr.every(item => (typeof item === 'number'))) return true;
        return false;
    };

    if (validArr(arr) === true) {
        const avgVal = () => {
            const sum = arr.reduce((a, b) => a + b);
            const avg = sum / arr.length;
            return Number(Math.round(avg + 'e2') + 'e-2');
        };
    
        arr.sort((a, b) => a - b);
    
        const minVal =  arr[0];
        const maxVal =  arr[arr.length-1];
        const arrLen =  arr.length; 
    
        const obj = {
            average: avgVal(),
            min: minVal,
            max: maxVal,
            length: arrLen
        };
    
        return obj;
    } else {
        return 'Array elements need to be numbers only.'
    };
}

module.exports = analyzeArray;