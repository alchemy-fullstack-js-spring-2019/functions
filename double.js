function double(n) {
    return n * 2;
}

function doubleArray(array) {
    const result = array.map(n => n * 2);
    return result;
}

module.exports = { double, doubleArray };
