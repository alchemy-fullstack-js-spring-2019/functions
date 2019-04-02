function numberManipulator(number, callback) {
    return callback(number);
}

function repeater(n, callback) {
    for(let i = 0; i < n; i++) {
        callback();
    }
}

function map(array, callback) {
    let result = [...Array(array.length)];
    for(let i = 0; i < array.length; i++) {
        result[i] = callback(array[i]);
    }
    return result;
}

module.exports = {
    numberManipulator,
    repeater,
    map
};
