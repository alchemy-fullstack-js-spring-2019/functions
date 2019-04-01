const add = require('./add');

function checkEven(number) {
    return number % 2 === 0;
}

function evens(array) {
    return array.filter(checkEven);
}

function firstEven(array) {
    return array.findIndex(checkEven);
}

function allEvens(array) {
    return array.every(checkEven);
}

function addEvens(array) {
    return add(evens(array));
}

module.exports = {
    evens,
    allEvens,
    addEvens,
    firstEven,
    checkEven
};
