const add = require('./add');

const isEven = n => n % 2 === 0;

function evens(array) {
    const evenArray = array.filter(isEven);
    return evenArray;
}

function firstEven(array) {
    const firstEvenIndex = array.findIndex(isEven);
    return firstEvenIndex;
}

function allEven(array) {
    return array.every(isEven);
}

function addEvens(array) {
    const evenArray = evens(array);
    const sumEvenArray = add(evenArray);
    //return add(evens(arr)); would also work, and is smaller
    return sumEvenArray;
}

module.exports = { evens, firstEven, allEven, addEvens };
