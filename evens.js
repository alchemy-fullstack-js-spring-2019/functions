const addArray = require('./add');

// const isEven = n => n % 2 === 0;

function isEven(n) {
    return n % 2 === 0;
}

// const evens = arr => {
//     return arr.filter(isEven);
// };

function evens(arr) {
    return arr.filter(isEven);
}

// const firstEven = arr => {
//     return arr.findIndex(isEven);
// };

function firstEven(arr) {
    return arr.findIndex(isEven);
}

function allEven(arr) {
    if(arr.every(isEven)) {
        return 'true';
    } else {
        return 'false';
    }
}

function addEvens(arr) {
    return addArray(evens(arr));
}

module.exports = {
    evens,
    firstEven,
    allEven,
    addEvens
};
