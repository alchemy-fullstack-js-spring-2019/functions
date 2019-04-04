function double(number) {
    return number * 2;
}

function doubleArray(array) {
    return array.map(double);
}

module.exports = {
    double,
    doubleArray
};
