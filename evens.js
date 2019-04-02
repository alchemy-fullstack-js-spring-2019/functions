const add = require('./add');

function evens(array) {
    return array.filter(a => {
        return !(a % 2);
    });
}

function firstEven(array) {
    const firstEvenNumber = evens(array)[0];
    return array.indexOf(firstEvenNumber);
}

function allEven(array) {
    return array.every(n => !(n % 2));
}

function addEvens(array) {
    const allEvens = evens(array);
    return add(allEvens);
}

module.exports = { evens, firstEven, allEven, addEvens };
