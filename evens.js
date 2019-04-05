const add = require('./add');
const evenNum = num => num % 2 === 0;

function evens(array) {
    return array.filter(evenNum);
}

function firstEven(array) {
    return array.findIndex(evenNum);
}

function allEvens(array) {
    return array.every(evenNum);
}

function addEvens(array) {
    const evenArray = evens(array);
    return add(evenArray);
}

module.exports = {
    evens,
    firstEven,
    allEvens,
    addEvens
};
