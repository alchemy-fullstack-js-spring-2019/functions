const add = require('./add');

const isEven = n => n % 2 === 0;

function evens(numbers) {
    return numbers.filter(isEven);
}

function firstEven(numbers) {
    return numbers.findIndex(isEven);
}

// const firstEven = arr => arr.findIndex(isEven);

function allEven(numbers) {
    return numbers.every(isEven);
}

// const allEvens = arr => arr.every(isEven);

function addEvens(numbers) {
    return add(evens(numbers));
}

module.exports = { evens, firstEven, allEven, addEvens };
