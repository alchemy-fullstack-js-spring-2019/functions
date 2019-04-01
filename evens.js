function evens(array) {
    return array.filter(a => {
        return !(a % 2);
    });
}

function firstEven(array) {
    const firstEvenNumber = evens(array)[0];
    return array.indexOf(firstEvenNumber);
}

module.exports = { evens, firstEven };
