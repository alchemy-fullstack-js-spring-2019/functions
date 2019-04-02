const add = require('./add');

function evens(arr){
    const isEven = n => n % 2 === 0;
    return arr.filter(isEven);
}

function firstEven(arr){
    const isEven = n => n % 2 === 0;
    return arr.findIndex(isEven);
}

function allEven(arr){
    const allEven = n => n % 2 === 0;
    return arr.every(allEven);
}

function addEvens(arr){
    const evensArray = evens(arr);
    const total = add(evensArray);
    return total;
}


module.exports = {
    evens,
    firstEven,
    allEven,
    addEvens
};
