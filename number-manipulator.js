//const { timesTwo } = require('./double');

function numberManipulator(number, callback) {
    return callback(number);
}

function repeater(number, callback) {
    let i = 0;
    while(i < number) {
        callback();
        i++;
    }
}

module.exports = {
    numberManipulator,
    repeater
};
