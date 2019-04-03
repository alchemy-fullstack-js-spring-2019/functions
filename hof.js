//higher order function takes a function as an argument
//functions that operate on other functions

function numberManipulator(n, callback) {
    return callback(n);
}

function repeater(n, callback) {
    [...Array(n)].forEach(callback);
}

module.exports = {
    numberManipulator,
    repeater
}
