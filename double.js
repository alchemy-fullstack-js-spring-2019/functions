function double(num) {
    return num * 2;
}

function arrayDouble(array) {
    return array.map(double);
}

module.exports = {
    double,
    arrayDouble
};
