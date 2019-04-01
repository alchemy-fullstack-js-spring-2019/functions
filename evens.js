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

function addEvens(array) {
    const evensArray = evens(array);
    return evensArray.reduce(function(total, num) {
        return total + num;
    });
}

module.exports = {
    evens,
    allEvens,
    addEvens
};
