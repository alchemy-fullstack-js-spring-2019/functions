function evens(array) {
    return array.filter((number) => number % 2 === 0);
}

function checkEven(number) {
    return number % 2 === 0;
}

function allEvens(array) {
    return array.every(checkEven);
}

function addEvens(array) {
    return evens(array).reduce((total, num) => total + num);
}

module.exports = {
    evens,
    allEvens,
    addEvens
};
