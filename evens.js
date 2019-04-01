function evens(array) {
    return array.filter(function(number) {
        return number % 2 === 0;
    });
}

function checkEven(number) {
    return number % 2 === 0;
}

function allEvens(array) {
    return array.every(checkEven);
}

module.exports = {
    evens,
    allEvens
};
