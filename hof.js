function numberManipulator(n, callback) {
    return callback(n);
}

function repeater(n, callback) {
    for(let i = 0; i < n; i++) {
        callback();
    }
}

function map(array, callback) {
    let newArray = [];
    for(let i = 0; i < array.length; i++) {
        const newValue = callback(array[i]);
        newArray.push(newValue);
    }
    return newArray;
}

module.exports = { numberManipulator, repeater, map };
