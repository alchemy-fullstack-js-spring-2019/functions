function double(number) {
    return number * 2;
}

function doubleArray(numbers) {
    return numbers.map(double);  
}

module.exports = { double, doubleArray };
