function double(number) {
    return number * 2;
}

function doubleArray(array) {
    const doubledArray = array.map(i => i * 2);
    return doubledArray;
}

module.exports = {
    double,
    doubleArray
};
