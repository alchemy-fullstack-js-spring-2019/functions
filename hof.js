//higher order function takes a function as an argument
//functions that operate on other functions

function numberManipulator(n, callback) {
    return callback(n);
}

function repeater(n, callback) {
    // let i = 0;
    // while(i < n ) {
    //     callback();
    // }

    // for(let i = 0; i < n; i++) {
    //     callback();
    // }

    // E6 spread operator = ...
    [...Array(n)]
        forEach(callback);
}

module.exports = {
    numberManipulator,
    repeater
}
