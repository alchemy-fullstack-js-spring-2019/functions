function double(a) {
    return a * 2;
}

function doubleArray(array) {
    const doubledArray = array.map(double); //originally had i => double(i) this is the same!
    return doubledArray;
}

module.exports = { double, doubleArray };

