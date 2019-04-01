function numberManipulator(n, callback) {
    return callback(n);
}

function repeater(n, callback) {
    for(let index = 0; index < n; index++) {
        callback(n[index]);
    }
}

function map(array, callback) {
    let newArray = [];
    for(let index = 0; index < array.length; index++) {
        const newValue = callback(array[index]);
        newArray.push(newValue);
    }
    return newArray;
}

module.exports = { numberManipulator, repeater, map };
