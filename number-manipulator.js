function numberManipulator(n, callback) {
    return callback(n);
}

// `numberManipulator` is a function that manipulates a number by invoking another function. For example,we can double a number with it:

// numberManipulator(5, n => n * 2);

// OR

// const double = n => n * 2;
// numberManipulator(5, double);

// * Create a function `numberManipulator` that takes a number `n` and a function `callback`
// * Invoke the `callback` and pass it `n` as an argument
// * **Don't** forget to write tests first


function repeater(n, callback) {
    for(let i = 0; i < n; i++) {
        callback();
    }
}

module.exports = {
    numberManipulator,
    repeater
};
