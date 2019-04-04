function timesTwo(number) {
    return number * 2;
}

function doubleArray(array) {
    return array.map(timesTwo);
}

module.exports = {
    timesTwo,
    doubleArray
};
