function evens(array) {
    return array.filter(a => {
        return !(a % 2);
    });
}

module.exports = evens;
