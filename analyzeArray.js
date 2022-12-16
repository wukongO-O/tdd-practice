function analyzeArray(arr) {

    const avgVal = () => {
       if (arr) {
        const sum = arr.reduce((a, b) => a + b);
        const avg = sum / arr.length;
        return Number(Math.round(avg + 'e2') + 'e-2');
       };
    };

    arr.sort((a, b) => a - b);

    const minVal = () => {
        return arr[0];
    };

    const maxVal = () => {
        return arr[arr.length-1];
    };

    const arrLen = () => {
        return arr.length; 
    };

    const obj = {
        average: avgVal(),
        min: minVal(),
        max: maxVal(),
        length: arrLen()
    };

    return obj;
}

module.exports = analyzeArray;