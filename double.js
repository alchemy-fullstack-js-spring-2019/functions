function double(number) {
    return number * 2;
}

function doubleArray(array) {
    const arrayOut = [];
    array.forEach(entry => {
        
        arrayOut.push(double(entry));
    });
    return arrayOut;
}

module.exports = { 
    double,
    doubleArray 
};
