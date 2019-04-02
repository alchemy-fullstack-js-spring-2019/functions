//acc = accumulator

function add(array) {
    const sum = array.reduce((acc, i) => acc + i);
    return sum;
}

module.exports = add;
